import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder,private customerSVC:CustomerService,private router :Router,private globals:GlobalsService) { }

  ngOnInit() {
    this.form = this.fb.group({
      "Email":["",Validators.required],
      "Password":["",Validators.required],
    })
  }

   login(){
    if(this.form.valid){
      this.customerSVC.validateUser(this.form.value).subscribe(
        result=>{
        // console.log(result);
         localStorage.setItem("auth_token",result.token.token);
         localStorage.setItem("cust-name",result.token.name);
         localStorage.setItem("cust-email",result.token.email);
         localStorage.setItem("cust-phone",result.token.phone);
          this.globals.auth_token =result.token.token;
          this.globals.userName =result.token.name;
          this.globals.userEmail =result.token.email;
          this.globals.userPhone =result.token.phone;


         this.router.navigate(['']);
        //  alert("Login Success");
        },
        err=>{
          alert(err);
          console.log(err);
        }
      )
    }
    else{
      alert("Invalid form");
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   custform:FormGroup

  constructor(private fb:FormBuilder,private customerSVC:CustomerService) { }

  ngOnInit() {
    this.custform = this.fb.group({
      "Phonenumber":["",Validators.required],
      "Name":["",Validators.required],
      "Email":["",Validators.required],
      "Password":["",Validators.required],
    })
  }

  register(){
    if(this.custform.valid){
      this.customerSVC.signup(this.custform.value).subscribe(
        result=>{
          alert("Successfully Registered");
          console.log(result);
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

FROM nginx:latest
LABEL author="Ram"
WORKDIR /usr/share/nginx/html/
COPY ./dist/food-order/ ./
EXPOSE 80
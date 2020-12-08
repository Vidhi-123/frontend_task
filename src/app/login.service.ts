import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  
  private url:string="https://demo.credy.in/api/v1/usermodule/login/";
  
  constructor(private _http:HttpClient) { }
  onLogin(user_name,password)
  {
    let credential=
    {
      "username":user_name,
      "password":password
    }
    let body=JSON.stringify(credential);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head});
  }

  
  onMovies(url)
  {
    let head=new HttpHeaders().set("Authorization","Token "+localStorage.getItem("token"));
    console.log(localStorage.getItem("token"));
    return this._http.get(url,{headers:head});
  }


}

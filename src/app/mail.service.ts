import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private url:string="http://localhost:3000/mail/";
  constructor(private _http:HttpClient) { }

  sendmail(item:FormData)
  {
    console.log(item);
   //let body=JSON.stringify(item);
   //let head1=new HttpHeaders().set("Content-Type","application/json");
    return this._http.post(this.url,item);
  }
}

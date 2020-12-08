import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demoapp';

  id:string;
  password:string;
  flag:number=0;
  constructor(private _ser:LoginService){}

  onLogin()
  {
    let obj={
      "id":this.id,
      "password":this.password
    };
    this._ser.onLogin(this.id,this.password).subscribe(
      (data:any[])=>{
    console.log(data);
    localStorage.setItem("token",data[1].token);

    })
  }

  ngOnInit()
  {

  }
}

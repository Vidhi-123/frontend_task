import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  sub_dis:boolean=false;
  constructor(private _ser:LoginService,private _router:Router) { }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      if(this.username!=null && this.password!=null)
      this.onLogin();
    }
  }



  onLogin()
  {
    
   
    this.sub_dis=true;
    this._ser.onLogin(this.username,this.password).subscribe(
      (res:any)=>{
    //console.log(res);

   this.sub_dis=false;
    localStorage.setItem("token",res["data"].token);
    localStorage.setItem("username",this.username);
    this._router.navigate(['/movies'])
    
    
    },(error:any)=>{
      //console.log(error)
      
        this.sub_dis=false;
      document.getElementById("e_msg").innerHTML="invalid credentials";
      
      
    })
  
  }

  ngOnInit() {
  }

}

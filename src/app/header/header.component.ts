import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
flag:boolean=false;
  constructor() { }

  ngOnInit() {


    if(localStorage.getItem("user_id")!=null)
    {
           document.getElementById("l2").hidden=false;
           document.getElementById("l1").hidden=true;
    }
    else{
      document.getElementById("l1").hidden=false;
      document.getElementById("l2").hidden=true;
    }

  }

}

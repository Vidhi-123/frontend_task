import { Component, OnInit,Inject } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  url:string="https://demo.credy.in/api/v1/maya/movies/";
  arr:any[]=[];
  url1:string;
  username:string;
  constructor(private _ser:LoginService,private _route:Router,public dialog: MatDialog) { }


  onViewMore()
  {
    this._ser.onMovies(this.url1).subscribe(
      (data:any)=>{
        for(let i=0;i<data["results"].length;i++)
        {
          this.arr.push(data["results"][i]);
        }
        this.url1=data["next"];
      }
    )
  }



  onRefresh()
  {
    window.location.reload();
  }



  openDialog(items): void {
    const dialogRef = this.dialog.open(movie_details, {
      width: '500px',
      data: {title: items.title, description: items.description,genres:items.genres}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }





  ngOnInit() {
    this.username=localStorage.getItem("username");
    if(this.username!=null)
    {
    this._ser.onMovies(this.url).subscribe(
      (data:any)=>{
        console.log(data);
        
        this.arr=data["results"];
        this.url1=data["next"];
      }
    )
    
  }
  else{
    this._route.navigate(['/']);
  }
  }
}





@Component({
  selector: 'movie_details',
  templateUrl: './movie_details.html',
  styleUrls: ['./movies.component.css']
  
})
export class movie_details implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<movie_details>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit()
  {
    console.log(this.data);
    console.log("done.");
  }
}

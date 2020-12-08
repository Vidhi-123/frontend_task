import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { routing } from "./app_routing";
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent,movie_details } from './movies/movies.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
  
    
    LoginComponent,
    HeaderComponent,
    MoviesComponent,
    movie_details
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [movie_details],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

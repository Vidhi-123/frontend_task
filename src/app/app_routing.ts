import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';



const arr: Routes = [
    {path:'',component:LoginComponent},
    {path:'movies',component:MoviesComponent}

]

export const routing = RouterModule.forRoot(arr);

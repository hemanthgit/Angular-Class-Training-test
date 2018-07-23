import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
//empty routes should always be specified at the end
export const appRoutes : Routes = [{
path:'home',component:HomeComponent
},
{
    //on defining redirect routes use a '/'
    path:'',redirectTo:'/home', pathMatch : 'full'
},
{
    //** indicates error components */
    path:'**' , component:ErrorComponent
}]
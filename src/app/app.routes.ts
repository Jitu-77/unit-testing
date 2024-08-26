import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OthersComponent } from './others/others.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'others',component:OthersComponent},
];
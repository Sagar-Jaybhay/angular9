import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent  } from "../home/home.component";


const HomeRout: Routes = [
{path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HomeRout)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HomeRoutingModule } from '../Routing/Customer-routing.Home';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }

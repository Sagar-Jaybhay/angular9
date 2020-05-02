import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Routing/Customer-routing.module';
import { LeftmenuComponent } from "./leftmenu/leftmenu.component";


@NgModule({
  declarations: [   
    LeftmenuComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [LeftmenuComponent]
})
export class MainModule { }

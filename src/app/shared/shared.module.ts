import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {User} from './model/user'; 
import { HeaderComponent } from './headerlayout/header.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AlertComponent } from './alert/alert.component';
import { MiddleLayoutComponent } from './middleLayout/middleLayout.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, RouterModule],
  declarations: [HeaderComponent, PageNotFoundComponent, AlertComponent, MiddleLayoutComponent],
  exports: [HeaderComponent, PageNotFoundComponent, AlertComponent, MiddleLayoutComponent],
  providers: []
})

export class SharedModule { }
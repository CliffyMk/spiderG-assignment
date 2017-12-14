import { Component, OnInit } from '@angular/core';
import "../assets/sass/app.scss";
import './app.component.scss';

@Component({
  selector: 'spiderG-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public message: any;
  constructor() {

  }
  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import './alert.scss';
@Component({
    selector: 'app-alert',
    inputs: ['message'],
    templateUrl: './alert.component.html'
})

export class AlertComponent implements OnInit {
    public message: any;
    constructor() { }

    ngOnInit() {
        $("div#alertBox").css("position", "relative");
    }
    public close(): void {
        this.message = null;
    }
}
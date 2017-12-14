import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Constants } from '../../core/constants/constant';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-middle-layout',
    templateUrl: 'middleLayout.component.html',
})
export class MiddleLayoutComponent implements OnInit, AfterViewInit {

    constructor(private route: ActivatedRoute,
        public router: Router) {

    }

    public isLoggedIn: boolean;

    ngOnInit(): void {
        console.log("MiddleLayoutComponent Initialized!");
        this.router.events.subscribe((val) => {
            console.log(val);
            // if(this.authenticationService.isTokenExpired())
            // {
            //     this.router.navigate([Constants.LOGINROUTE]);
            // }
        });
    }

    ngAfterViewInit() {
        console.log("MiddleLayoutComponent after view Initialized!")
    }
}
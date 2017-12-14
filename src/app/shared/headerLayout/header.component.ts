import { AlertService } from '../alert/alert.service';
import { HeaderService } from './header.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Constants } from '../../core/constants/constant';
import "./header.scss";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [HeaderService]
})
export class HeaderComponent {

    constructor(private route: ActivatedRoute,
        private router: Router, private headerService: HeaderService, private alertService: AlertService) {
    }
    goToHome() {
        this.router.navigate([Constants.DASHBOARDROUTE]);
    }
}

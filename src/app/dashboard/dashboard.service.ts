import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BaseHttpService } from '../core/services/index';

import { SharedModule } from '../shared/shared.module';
import { Constants } from '../core/constants/constant';

@Injectable()
export class DashboardService extends BaseHttpService {
    getNews() {
        this.method = Constants.HTTPGETMETHOD;
        this.serviceUrl = Constants.NEWSURL;
        return super.call(null);
    }
}


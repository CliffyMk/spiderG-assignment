import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../core/services/baseHttp.service';
import { Http, Headers } from '@angular/http';
import { Constants } from '../../core/constants/constant';

@Injectable()
export class HeaderService extends BaseHttpService {
    constructor(private _http: Http) {
        super(_http);
    }
}
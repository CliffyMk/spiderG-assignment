import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Constants } from '../constants/constant';

@Injectable()
export abstract class BaseHttpService {

    private baseUrl: string = Constants.BASEURL;
    protected method: string;
    protected serviceUrl: string;
    protected headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    }

    call(params: any) {
        debugger;
        let url: string = this.setUrl();

        if (this.method == "GET" && (params === null) == false) {
            url = url + "?" + this.getQueryStringFromParams(params);
            params = [];
        }
        let options = new RequestOptions({ headers: this.headers });
        options.url = url;
        options.method = this.method;
        options.body = this.urlEncodeParams(params);
        return this.http.request(url, options).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        // console.log(body);
        return body || {};
    }
    private urlEncodeParams(params: any) {
        var str = [];
        for (var p in params)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
        return str.join("&");
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        debugger;
        let errMsg: string;
        if (error instanceof Response) {
            // const body = error.json() || '';
            // const err = body.error || JSON.stringify(error);
            const err = JSON.stringify(error);

            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    private setUrl() {
        if (Constants.DEBUGMODE) {
            this.method = "GET";
            return "./mockdata" + this.serviceUrl;

        } else {
            return this.baseUrl + this.serviceUrl;
        }
    }

    private getQueryStringFromParams(params: string[]) {
        var str = [];
        for (var p in params)
            str.push(p + "=" + params[p]);
        return str.join("&");
    }

    private showAlert(title: string, mesasge: string) {
    };
}
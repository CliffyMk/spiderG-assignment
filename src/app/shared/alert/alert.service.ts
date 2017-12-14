import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AlertMessage } from '../model/alertMessage';

@Injectable()
export class AlertService {
    public alert: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private timer: any;
    private LATENCY: number = 5000;
    success(value: string) {
        console.log(value);
        var message = new AlertMessage("success", value);
        this.alert.next({ type: 'success', text: value });
        this.timeout();
    }
    error(value: string) {
        console.log(value);
        var message = new AlertMessage("error", value);

        this.alert.next({ type: 'error', text: value });
        this.timeout();
    }

    private timeout(): void {
        $('div#alertBox').removeClass('fadeOut');
        this.clearTimer();
        this.poll(this.alert, this.LATENCY);
    }
    private poll(alertSubject: BehaviorSubject<any>, pollInterval: number) {
        this.timer = setTimeout(function () {
            // $('div#alertBox').addClass('fadeOut');
            // setTimeout(() => { alertSubject.next(null) }, 500);
        }, pollInterval, alertSubject);
    }
   
    getMessage(): Observable<any> {
        return this.alert.asObservable();
    }
    private clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public static DEBUGMODE: boolean = false;
    public static HTTPGETMETHOD: string = 'GET';
    public static HTTPPUTMETHOD: string = 'PUT';
    public static HTTPPOSTMETHOD: string = 'POST';
    public static HTTPDELETEMETHOD: string = 'DELETE';
    //SERVICE URL
    public static BASEURL: string = '';
    public static NEWSURL: string = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=13d9e783ea46414ba65d719d2113b1b1";
    //GLOBAL Constants
    public static LOADING: string = 'Loading...';
    public static REMEMBERMESTORAGE: string = "rememberMe";
    public static TOKENEXPIRYTIME: string = "10000";

    //ROUTE URL
    public static DASHBOARDROUTE: string = 'home';

    // Storage Key
    public static USERSTORAGEKEY: string = "userkey";
}

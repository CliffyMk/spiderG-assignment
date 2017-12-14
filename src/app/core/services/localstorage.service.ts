import { Injectable } from '@angular/core';
var CryptoJS = require("crypto-js");

@Injectable()
export class LocalStorageService {

    constructor() {

    }

    public clear() {
        return localStorage.clear();
    }

    public get(key: any): any {
        if (localStorage.getItem(key) === null || localStorage.getItem(key) === undefined)
            return null;

        var bytes = CryptoJS.AES.decrypt(localStorage.getItem(key), key);
      //  console.log(bytes);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;//JSON.parse(localStorage.getItem(key));
    }

    public set(key: any, data: any): void {
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key);
        //console.log(ciphertext);
      //  console.log(data);
        return localStorage.setItem(key, ciphertext);
    }

    public delete(key: any) {
        return localStorage.removeItem(key);
    }
    public deleteAll() {
        return localStorage.clear();
    }
}

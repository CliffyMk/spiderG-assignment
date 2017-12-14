
import { Injectable } from '@angular/core';

export interface sharedData {
    value: any;
}

@Injectable()
export class SharedService {
    public sharingData: sharedData;
    saveData(value: any) {
        this.sharingData = { value: value };
    }

    getData() {
        return this.sharingData.value;
    }
    removeValue(list: any, value: string, separator: string=",") {
        separator = separator || ",";
        var values = list.split(separator);
        for (var i = 0; i < values.length; i++) {
            if (values[i] == value) {
                values.splice(i, 1);
                return values.join(separator);
            }
        }
        return list;
    }
}
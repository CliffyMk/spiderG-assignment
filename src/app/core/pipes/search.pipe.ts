import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchPipe'

})
export class SearchPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) return [];
        if (value) {
            return items.filter((it) => {
                return (it.firstname.includes(value) == true)
                    || (it.lastname.includes(value) == true)
                    || (it.phone.includes(value) == true)
                    || (it.email.includes(value) == true);
            })
        } else return items;
    }
}
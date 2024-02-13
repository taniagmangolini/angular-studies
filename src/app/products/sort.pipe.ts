import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProducts'
})
export class SortPipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (value) {
      return value.sort((a: any, b: any) => {
        if (a < b) {
          return -1;
        } else if (b < a) {
          return 1;
        }
        return 0;
      });
    }
    return [];
  }

}

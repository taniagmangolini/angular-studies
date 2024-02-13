import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProducts',
  pure: true, // executed when there is a change to the reference of the input variable
  //pure: false //executed method every time a change detection cycle is triggered (bad performance),
  standalone: false //registered in a module
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

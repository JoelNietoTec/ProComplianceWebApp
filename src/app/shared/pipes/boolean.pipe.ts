import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1) {
      return 'Yes';
    } else {
      return 'No';
    }

  }

}

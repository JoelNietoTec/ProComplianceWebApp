import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

  constructor() { }

  sortBy(array: Array<any>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

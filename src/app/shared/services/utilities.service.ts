import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

  constructor() { }

  sortBy(array: Array<any>, args: string): Array<any> {
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

  filterByID(array: Array<any>, id: number): any {
    return array.find(item => item.ID === id);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collectionIfIsComplete'
})
export class CollectionIfIsCompletePipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): string {
    return value? 'Si' : 'No';
  }

}

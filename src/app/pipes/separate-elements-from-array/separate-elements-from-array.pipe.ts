import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separateElementsFromArray'
})
export class SeparateElementsFromArrayPipe implements PipeTransform {

  transform(value: string[], ...args: any[]): string[] {
    return value.map(elements => ' ' + elements);
  }

}

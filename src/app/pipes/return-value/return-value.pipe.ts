import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'returnValue'
})
export class ReturnValuePipe implements PipeTransform {

  transform(value?: string, ...args: unknown[]): any {
    if(value){
      return value;
    }
  }

}

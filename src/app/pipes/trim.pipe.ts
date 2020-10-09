import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const trimed: any = value.replace(' ', '').trim();
    console.log('arguments pipe trim --> ', args);
    return trimed;
  }

}

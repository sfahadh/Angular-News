import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

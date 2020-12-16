import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPublisher'
})
export class FilterPublisherPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

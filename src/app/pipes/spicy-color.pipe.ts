import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spicyColor'
})
export class SpicyColorPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const color = {
      0: 'blue',
      1: 'blue',
      2: 'blue',
      3: 'red',
      4: 'red'
    };
    return color[value] ? color[value] : '';
  }
}

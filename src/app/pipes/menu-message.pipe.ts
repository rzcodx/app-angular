import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menuMessage'
})
export class MenuMessagePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return 'El platillo seleccionado es: ' + value;
  }
}

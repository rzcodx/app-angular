import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'spicyMessage'
})
export class SpicyMessagePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const messages = {
      0: 'No pica',
      1: 'Pica poco',
      2: 'Pica',
      3: 'Pica mucho',
      4: 'Muy picante'
    }
    return messages[value] ? messages[value] : 'No hay registro de picor'
  }
}

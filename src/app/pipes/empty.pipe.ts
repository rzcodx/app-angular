import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value === '' || value === undefined || value === null) {
      return '****'
    }
  }
}

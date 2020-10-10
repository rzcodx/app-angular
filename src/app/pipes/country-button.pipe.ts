import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'countryButton'
})
export class CountryButtonPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): unknown {
    return value ? 'Ocultar países' : 'Mostrar países'
  }
}

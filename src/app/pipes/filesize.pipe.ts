import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filesize'
})

export class FilesizePipe implements PipeTransform {
  transform(size: unknown, ...args: unknown[]): string {
    return `${size} MB`
  }
}

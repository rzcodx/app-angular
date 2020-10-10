import { JsonPipe, UpperCasePipe } from '@angular/common'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Country } from '@app/models'
import * as countriesJson from './../../assets/countries.json'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [UpperCasePipe, JsonPipe]
})
export class CountryComponent implements OnInit {
  selected: Country
  countries: Country[]
  birthday = new Date()
  total = 123456.7890
  countryJson: string
  showJson: boolean

  constructor(private upperCasePipe: UpperCasePipe, private jsonPipe: JsonPipe) {
    // this.upperCasePipe = new UpperCasePipe()
    this.selected = (countriesJson as any).default.filter((country: Country) => (country.name === 'Peru'))[0]
    // this.selected = countries.filter((country: Country) => (country.name === 'Peru'))[0]
    // this.selected = countriesJson[10]
    this.countryJson = this.jsonPipe.transform(this.selected)
    console.log(this.selected)
  }

  ngOnInit(): void {}

  send(name: string): void {
    console.log('Antes :::', name)
    name = this.upperCasePipe.transform(name)
    console.log('Después :::', name)
  }

  toggleJson(): void {
    this.showJson = !this.showJson
  }
}

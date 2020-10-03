import {JsonPipe, UpperCasePipe} from '@angular/common'
import {Component, EventEmitter, OnInit, Output} from '@angular/core'
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

  constructor(private uppperCasePipe: UpperCasePipe, private jsonPipe: JsonPipe) {
    // this.upperCasePipe = new UpperCasePipe()
    // this.selected = Object.values(countries).filter((country: Country) => (country.name = 'Peru'))[0]
    // this.selected = countries.filter((country: Country) => (country.name = 'Peru'))[0]
    this.selected = countriesJson[10]
    console.log(this.selected)
  }

  ngOnInit(): void {}

  send(name: string): void {
    console.log('Antes :::', name)
    name = this.uppperCasePipe.transform(name)
    console.log('Después :::', name)
  }

  showJson(country: Country): void {
    this.countryJson = this.jsonPipe.transform(country)
  }
}

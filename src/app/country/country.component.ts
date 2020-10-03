import { Component, OnInit } from '@angular/core'
import { Country } from '../interfaces'
import * as countries from './../../assets/countries.json'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  selected: Country
  // countries: Country[] = countriesJson

  constructor() {
    this.selected = Object.values(countries).filter((country: Country) => (country.name = 'Peru'))[0]
    // this.selected = countries.filter((country: Country) => (country.name = 'Peru'))[0]
    console.log(this.selected.name)
  }

  ngOnInit(): void {}

}

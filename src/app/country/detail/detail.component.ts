import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    public countriesService: CountriesService
  ) { }

  ngOnInit(): void {
  }

}

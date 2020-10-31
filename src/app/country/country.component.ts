import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Country, Post } from '@app/models';
import * as countriesJson from './../../assets/countries.json';
import { CountriesService } from '../services/countries.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [UpperCasePipe, JsonPipe]
})
export class CountryComponent implements OnInit, OnDestroy {
  selected: Country;
  countries: Country[];
  birthday = new Date();
  total = 123456.7890;
  countryJson: string;
  showJson: boolean;
  code = 0;
  postResult = '';

  private destroyAll$: Subject<void> = new Subject<void>();

  constructor(
    private upperCasePipe: UpperCasePipe,
    private jsonPipe: JsonPipe,
    public countriesService: CountriesService,
  ) {
    // this.upperCasePipe = new UpperCasePipe();
    this.selected = (countriesJson as any).default.filter((country: Country) => (country.name === 'Peru'))[0];
    // this.selected = countries.filter((country: Country) => (country.name === 'Peru'))[0];
    // this.selected = countriesJson[10];
    this.countryJson = this.jsonPipe.transform(this.selected);
    console.log(this.selected);
  }

  ngOnInit(): void {
    // this.countriesService.getList().subscribe();
    const service = this.countriesService.getList()
      // El http service desuscribe sus suscripciones automáticamente
      // .pipe(takeUntil(this.destroyAll$))
      .subscribe(countries => {
          // console.log(countries[8].name);
          // console.log('Dentro de la suscripción');
          // console.log(service.closed);
          // this.selected = countries[8];
        },
        error => {},
        () => {
          // console.log('Se terminó de listar');
          // console.log(service.closed);
        },
      );

    // console.log('Se ejecutó antes');
    // console.log(service.closed);
  }

  send(name: string): void {
    console.log('Antes :::', name);
    name = this.upperCasePipe.transform(name);
    console.log('Después :::', name);
  }

  toggleJson(): void {
    this.showJson = !this.showJson;
  }

  getInfo(code: number): void {
    this.countriesService.getCountry(code);
  }

  addPost(): void {
    this.postResult = '';

    const post: Post = {
      userID: 1,
      title: 'Título de prueba',
      body: 'Body',
    };

    this.countriesService.addPost(post)
      .subscribe(data => {
          this.postResult = `Se agregó el usuario con el id: ${data.id}`;
        }
      );
  }

  putPost(): void {
    this.postResult = '';

    const post: Post = {
      userID: 1,
      title: 'Título de prueba',
      body: 'Body de prueba',
    };

    this.countriesService.putPost(post)
      .subscribe(data => {
          this.postResult = `Se actualizó el usuario con id: ${data.id}`;
        }
      );
  }

  patchPost(): void {
    this.postResult = '';

    const post: Post = {
      userID: 1,
      title: 'Título cambiado',
    };

    this.countriesService.addPost(post)
      .subscribe(data => {
          this.postResult = `Se actualizó el usuario con id: ${data.id}`;
        }
      );
  }

  deletePost(): void {
    this.postResult = '';

    this.countriesService.deletePost(1)
      .subscribe(data => {
          this.postResult = `El usuario con el id: 1 fue eliminado.`;
        }
      );
  }

  ngOnDestroy(): void {
    this.destroyAll$.next();
    this.destroyAll$.complete();
    this.destroyAll$.unsubscribe();
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  { path: 'countries', component: CountryComponent },
  { path: 'dish', component: DishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

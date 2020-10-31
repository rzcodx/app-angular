import { Injectable } from '@angular/core';
import { Customer, Dish } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  customer: Customer;
  order: Dish[] = [];
  total: number;

  constructor() {  }

  addDish(dish: Dish): void {
    this.order.push(dish);
    this.check();
  }

  check(): void {
    let total = 0;
    this.order.forEach((dish, i) => {
      total += dish.price;
    });
    this.total = total;
  }
}

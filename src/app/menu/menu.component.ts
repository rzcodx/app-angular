import { Component, OnInit } from '@angular/core';
import { Customer, Dish } from '../interfaces';
import * as dishesJson from './../../assets/dishes.json';
import { MenuService } from '../utils/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name = 'Raul';

  dish: Dish;
  selected = '';

  dishes: Dish[];

  constructor(public menuService: MenuService) {
    this.dishes = (dishesJson as any).default;
    this.listDishes();
  }

  ngOnInit(): void {}

  listDishes(): void {
    this.dishes.forEach((dish, i) => {
      console.log(`${i}: ${dish.name}`);
    });
  }

  list = (p1: string, ps2, p3?): void => {

  }

  select(dish: Dish): void {
    this.selected = dish.name;
    this.menuService.addDish(dish);
  }

  show(stock: boolean): string {
    return '';
    // return stock ? '' : 'none'
  }

  send(name: string): void {
    this.menuService.customer = {
      name,
      level: 'new',
      category: 'main'
    };
  }
}

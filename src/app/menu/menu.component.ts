import { Component, OnInit } from '@angular/core'
import { Customer, Dish } from '../interfaces'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name = 'Raul'

  dish: Dish
  customer: Customer
  selected = ''

  dishes: Dish[] = [
    {
      name: 'Arroz con pollo',
      ingredients: [
        { name: 'Arroz', qty: 1 },
        { name: 'Pollo', qty: 2 },
        { name: 'Zanahoria', qty: 3 },
        { name: 'Arveja', qty: 4 },
        { name: 'Choclo', qty: 5 },
        { name: 'Culantro', qty: 6 },
      ]
    },
    {
      name: 'Escabeche de pollo',
      ingredients: [
        { name: 'Arroz', qty: 1 },
        { name: 'Papa', qty: 2 },
        { name: 'Pollo', qty: 3 },
        { name: 'Cebolla', qty: 4 },
        { name: 'Ajos', qty: 5 },
      ]
    },
    {
      name: 'Chanfainita combinada',
      ingredients: [
        { name: 'Bofe', qty: 1 },
        { name: 'Mote', qty: 2 },
        { name: 'Arroz', qty: 3 },
      ]
    },
    {
      name: 'Ceviche',
      ingredients: [
        { name: 'Limón', qty: 1 },
        { name: 'Pesacado', qty: 2 },
        { name: 'Cebolla', qty: 3 },
        { name: 'Sal', qty: 4 },
      ]
    },
    {
      name: 'Cau cau',
      ingredients: [
        { name: 'Arroz', qty: 1 },
        { name: 'Papa', qty: 2 },
        { name: 'Mondongo', qty: 3 },
        { name: 'Zanahoria', qty: 4 },
        { name: 'Arveja', qty: 5 },
      ]
    },
    {
      name: 'Pollo a la brasa',
      ingredients: [
        { name: 'Pollo', qty: 1 },
        { name: 'Papa', qty: 2 },
      ]
    },
    {
      name: 'Tacu tacu',
      ingredients: [
        { name: 'Arroz', qty: 1 },
        { name: 'Frijol', qty: 2 },
        { name: 'Cebolla', qty: 3 },
      ]
    },
    {
      name: 'Tallarin rojo',
      ingredients: [
        { name: 'Fideos', qty: 1 },
        { name: 'Pollo', qty: 2 },
        { name: 'Tomate', qty: 3 },
      ]
    },
  ]

  constructor() {
    this.listDishes()
    this.customer = {
      name: 'Juan',
      level: 'vip',
      category: 'main'
    }
  }

  ngOnInit(): void {}

  listDishes(): void {
    this.dishes.forEach((dish, i) => {
      console.log(`${i}: ${dish}`)
    })
  }

  list = (p1: string, ps2, p3?): void => {

  }

  select(dish: Dish): void {
    this.selected = dish.name
  }
}

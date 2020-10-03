import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import { Dish, Ingredient } from '../interfaces'

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _dish: Dish
  // tslint:disable-next-line:variable-name
  private _name: string
  // tslint:disable-next-line:variable-name
  private _amountOfIngredients: string

  @Input() set dish(dish: Dish) {
    this._dish = dish
    this._name = this.generateName(dish.name)
    this._amountOfIngredients = this.getAmountOfIngredients(dish.ingredients)
  }
  get dish(): Dish {
    return this._dish
  }
  get name(): string {
    return this._name
  }
  get amountOfIngredients(): string {
    return this._amountOfIngredients
  }

  @Output() choose: EventEmitter<Dish> = new EventEmitter<Dish>()

  constructor() { }

  ngOnInit(): void {}

  generateName(name: string): string {
    return `El nombre es: ${name}`
  }

  getAmountOfIngredients(ingredients: Ingredient[]): string {
    return `La cantidad de ingredientes es: ${ingredients.length}`
  }

  notify(dish: Dish): void {
    this.choose.emit(dish)
  }
}

export interface Dish {
  name: string,
  ingredients: Ingredient[],
  stock: boolean
}

export interface Ingredient {
  name: string,
  qty: number
}

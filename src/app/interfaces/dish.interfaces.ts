export interface Dish {
  name: string,
  ingredients: Ingredient[],
  stock: boolean,
  spicy: number
}

export interface Ingredient {
  name: string,
  qty: number
}

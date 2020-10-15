export type CustomerType = 'new' | 'regular ' | 'vip';
export type Category = 'entrance' | 'main' | 'dessert';

export interface Customer {
  name: string;
  level: CustomerType;
  category: Category;
}

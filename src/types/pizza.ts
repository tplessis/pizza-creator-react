// @ts-ignore

export type PizzaSize = {
  label: string;
  value: number;
  price: number;
};

export type PizzaTopping = {
  id: number;
  label: string;
  price: number;
};

export type Pizza = {
  id?: number;
  size: PizzaSize;
  toppings: Array<PizzaTopping>;
};

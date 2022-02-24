import axios from 'axios';
import { useQuery } from 'react-query';

import { PizzaTopping } from '@/types/pizza';

export const getPizzaToppings = async (): Promise<PizzaTopping[]> => {
  const response = await axios.get(`/datas/toppings.json`);
  return response.data;
};

export const usePizzaToppings = () => {
  return useQuery('toppings', getPizzaToppings);
};

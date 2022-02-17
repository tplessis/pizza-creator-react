import axios from 'axios';
import { useQuery } from 'react-query';

import { PizzaSize } from '@/types/pizza';

export const getPizzaSizes = (): Promise<PizzaSize[]> => {
  return axios.get(`/datas/sizes.json`);
};

export const usePizzaSizes = () => {
  return useQuery('sizes', getPizzaSizes);
};

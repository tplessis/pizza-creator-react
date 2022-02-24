import axios from 'axios';
import { useQuery } from 'react-query';

import { PizzaSize } from '@/types/pizza';

export const getPizzaSizes = async (): Promise<PizzaSize[]> => {
  const response = await axios.get(`/datas/sizes.json`);
  return response.data;
};

export const usePizzaSizes = () => {
  return useQuery('sizes', getPizzaSizes);
};

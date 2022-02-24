import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PizzaSize, PizzaTopping } from '@/types/pizza';

export interface ConfiguratorState {
  size: PizzaSize | undefined;
  toppings: PizzaTopping[];
}

const initialState: ConfiguratorState = {
  size: undefined,
  toppings: [],
};

export const configuratorSlice = createSlice({
  name: 'configurator',
  initialState,
  reducers: {
    sizeUpdated(state, action: PayloadAction<PizzaSize>) {
      state.size = action.payload;
    },
    toppingAdded(state, action: PayloadAction<PizzaTopping>) {
      state.toppings = [...state.toppings, action.payload];
    },
    toppingRemoved(state, action: PayloadAction<PizzaTopping>) {
      state.toppings = state.toppings.filter((topping) => action.payload.id === topping.id);
    },
  },
});

export const { sizeUpdated, toppingAdded, toppingRemoved } = configuratorSlice.actions;

export const selectPizzaSize = (state: ConfiguratorState) => state.size;
export const selectPizzaToppings = (state: ConfiguratorState) => state.toppings;

export default configuratorSlice.reducer;

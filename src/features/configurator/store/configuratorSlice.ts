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
    toppingUpdated(state, action: PayloadAction<PizzaTopping[]>) {
      state.toppings = [...action.payload];
    },
    toppingRemoved(state, action: PayloadAction<PizzaTopping>) {
      state.toppings = state.toppings.filter((topping) => action.payload.id === topping.id);
    },
    clear(state) {
      state.size = undefined;
      state.toppings = [];
    },
  },
});

export const { sizeUpdated, toppingUpdated, toppingRemoved, clear } = configuratorSlice.actions;

export const selectPizzaSize = (state: ConfiguratorState) => state.size;
export const selectPizzaToppings = (state: ConfiguratorState) => state.toppings;

export default configuratorSlice.reducer;

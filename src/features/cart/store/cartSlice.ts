import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pizza } from '@/types/pizza';

export interface CartState {
  pizzas: Pizza[];
}

const initialState: CartState = {
  pizzas: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    pizzaAdded(state, action: PayloadAction<Pizza>) {
      state.pizzas = [...state.pizzas, action.payload];
    },
  },
});

export const { pizzaAdded } = cartSlice.actions;

export const selectPizzas = (state: CartState) => state.pizzas;

export default cartSlice.reducer;

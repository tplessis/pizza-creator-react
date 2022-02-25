import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from '@/features/cart/store/cartSlice';
import { configuratorSlice } from '@/features/configurator/store/configuratorSlice';

export const index = configureStore({
  reducer: {
    configurator: configuratorSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;

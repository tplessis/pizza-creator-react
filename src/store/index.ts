import { configureStore } from '@reduxjs/toolkit';

import { configuratorSlice } from '@/features/configurator/store/configuratorSlice';

export const index = configureStore({
  reducer: {
    configurator: configuratorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;

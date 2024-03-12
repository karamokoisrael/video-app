import { devtools } from 'zustand/middleware';

export const devTools = (store: any) =>
  process.env.NODE_ENV != 'production' ? devtools(store) : store;

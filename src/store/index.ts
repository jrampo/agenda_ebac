import { configureStore } from "@reduxjs/toolkit";

import contatosReducer from "./reducers/contatos.ts";

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;

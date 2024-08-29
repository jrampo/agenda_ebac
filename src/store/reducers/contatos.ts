import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const contatosSlice = createSlice({
  name: "contatos",
  initialState: [
    new Contato("Robervaaaal", "roberva@gmail", 3332211, 1),
    new Contato("Toloyyyyyyyyy", "tolos@gmail", 2232211, 2),
    new Contato("Chicaaaaaao", "chicao@gmail", 6632211, 3),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload);
    },
  },
});

export const { remover } = contatosSlice.actions;

export default contatosSlice.reducer;

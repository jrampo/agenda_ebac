import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato.ts";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: "roberval",
      email: "roberval@gmail.com",
      telefone: "1223456",
    },
    {
      id: 2,
      nome: "chicao",
      email: "chicao@gmail.com",
      telefone: "1653456",
    },
    {
      id: 3,
      nome: "toloy",
      email: "toloy@gmail.com",
      telefone: "1543456",
    },
    {
      id: 4,
      nome: "nene",
      email: "nene@gmail.com",
      telefone: "1268794",
    },
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
  },
});

export const { remover, editar } = contatosSlice.actions;

export default contatosSlice.reducer;

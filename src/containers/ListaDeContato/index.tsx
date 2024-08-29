import React from "react";
import Contato from "../Contato/index.tsx";
import * as S from "./styles.ts";

const contatos = [
  {
    nome: "roberval",
    email: "roberval@gmail.com",
    telefone: "3333-2222",
  },
  {
    nome: "tião",
    email: "tiao@gmail.com",
    telefone: "3333-1111",
  },
  {
    nome: "toloy",
    email: "toloy@gmail.com",
    telefone: "5555-2222",
  },
  {
    nome: "chicão",
    email: "chicao@gmail.com",
    telefone: "1111-2222",
  },
];

const ListaDeContatos = () => (
  <S.Container>
    <ul>
      {contatos.map((c) => (
        <li>
          <Contato nome={c.nome} email={c.email} telefone={c.telefone} />
        </li>
      ))}
    </ul>
  </S.Container>
);

export default ListaDeContatos;

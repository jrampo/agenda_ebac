import React from "react";
import Contato from "../Contato/index.tsx";
import * as S from "./styles.ts";

const ListaDeContatos = () => (
  <S.Container>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </S.Container>
);

export default ListaDeContatos;

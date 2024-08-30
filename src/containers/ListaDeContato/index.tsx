import React from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store/index.ts";

import Contato from "../Contato/index.tsx";

import * as S from "./styles.ts";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  return (
    <S.Container>
      <ul>
        {itens.map((c) => (
          <li>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ListaDeContatos;

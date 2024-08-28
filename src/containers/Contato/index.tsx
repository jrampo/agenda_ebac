import React from "react";

import * as S from "./styles.ts";

const Contato = () => (
  <S.Card>
    <S.Nome>Nome do contato</S.Nome>
    <S.Email>Email do contato</S.Email>
    <S.Telefone>Telefone do contato</S.Telefone>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
);

export default Contato;

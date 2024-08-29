import React, { useState } from "react";

import * as S from "./styles.ts";

type Props = {
  nome: string;
  email: string;
  telefone: string;
};

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false);

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Email>{email}</S.Email>
      <S.Telefone>{telefone}</S.Telefone>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Contato;

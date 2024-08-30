import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles.ts";
import { remover } from "../../store/reducers/contatos.ts";
import ContatoClass from "../../models/Contato.ts";

type Props = ContatoClass;
const Contato = ({ nome, email, telefone, id }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false);
  const dispatch = useDispatch();

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Email>{email}</S.Email>
      <S.Telefone>{telefone}</S.Telefone>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Contato;

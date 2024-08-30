import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles.ts";
import { remover } from "../../store/reducers/contatos.ts";
import ContatoClass from "../../models/Contato.ts";

type Props = ContatoClass;
const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id,
}: Props) => {
  const dispatch = useDispatch();

  const [estaEditando, setEstaEditando] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal);
    }
  }, [nomeOriginal]);

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal);
    }
  }, [emailOriginal]);

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal);
    }
  }, [nomeOriginal]);

  return (
    <S.Card>
      <S.Nome
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <S.Email
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Telefone
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
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

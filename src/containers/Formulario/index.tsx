import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.ts";
import Contato from "../../models/Contato.ts";
import { cadastrar } from "../../store/reducers/contatos.ts";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault();
    const contatoParaAdicionar = new Contato(nome, email, telefone, 1);
    dispatch(cadastrar(contatoParaAdicionar));
    navigate("/");
  };

  return (
    <S.Card>
      <S.Titulo>Adicionar novo contato</S.Titulo>
      <S.DivFlex onSubmit={cadastrarTarefa}>
        <S.Inputs
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome"
        />
        <S.Inputs
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="E-mail"
        />
        <S.Inputs
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          placeholder="Telefone"
        />
        <S.Botao type="submit">Enviar</S.Botao>
      </S.DivFlex>
    </S.Card>
  );
};

export default Formulario;

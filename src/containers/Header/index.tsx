import React from "react";
import * as S from "./styles.ts";
import BotaoAdicionar from "../../components/BotaoAdicionar/index.tsx";

const Header = () => (
  <S.HeaderBody>
    <S.Container>
      <S.Title>Agenda EBAC</S.Title>
      <BotaoAdicionar />
    </S.Container>
  </S.HeaderBody>
);

export default Header;

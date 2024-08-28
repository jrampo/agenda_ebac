import React from "react";
import EstiloGlobal, { Container } from "./styles/index.ts";
import BarraLateral from "./containers/BarraLateral/index.tsx";
import ListaDeTarefas from "./containers/ListaDeTarefa/index.tsx";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  );
}

export default App;

import React from "react";
import EstiloGlobal, { Container } from "./styles/index.ts";
import ListaDeContato from "./containers/ListaDeContato/index.tsx";
import Header from "./containers/Header/index.tsx";

function App() {
  return (
    <div>
      <EstiloGlobal />
      <Header />
      <Container>
        <ListaDeContato />
      </Container>
    </div>
  );
}

export default App;

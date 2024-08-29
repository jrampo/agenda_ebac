import React from "react";
import EstiloGlobal, { Container } from "./styles/index.ts";
import ListaDeContato from "./containers/ListaDeContato/index.tsx";
import Header from "./containers/Header/index.tsx";
import { Provider } from "react-redux";

import store from "./store/index.ts";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Container>
        <ListaDeContato />
      </Container>
    </Provider>
  );
}

export default App;

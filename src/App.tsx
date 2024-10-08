import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.ts";

import EstiloGlobal, { Container } from "./styles/index.ts";
import Header from "./containers/Header/index.tsx";
import Home from "./pages/Home/index.tsx";
import Adicionar from "./pages/Adicionar/index.tsx";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adicionar",
    element: <Adicionar />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;

import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none
}
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export default EstiloGlobal;

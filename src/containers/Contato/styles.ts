import styled from "styled-components";

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;

  margin-top: 32px;
`;

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Email = styled.div`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Telefone = styled.div`
  color: #8b8b8b;
  line-heigh: 24px;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 15px;
`;

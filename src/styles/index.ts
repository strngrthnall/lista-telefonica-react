import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variaveis'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: #fff;
  }

  body {
    background-color: ${variaveis.azul};
  }

  textarea:focus, input:focus {
    outline: none;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CampoTxt = styled.input`
  color: ${variaveis.branco};
  font-size: 0.9rem;
  background-color: transparent;
  width: 40%;
  box-sizing: border-box;
  padding-inline: 0.5rem;
  padding-block: 0.1rem;
  border: none;
  border-bottom: 1px solid ${variaveis.cinza};
  transition: all 400ms ease-in-out;

  &:hover {
    backdrop-filter: brightness(1.25);
  }

  &:focus {
    border-bottom: 1px solid ${variaveis.verde};
  }
`

export const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background-color: ${variaveis.branco};
  outline: 2px ${variaveis.branco} solid;
  outline-offset: -3px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: transparent;
  }

  &:hover p {
    color: ${variaveis.branco};
  }

  p {
    color: ${variaveis.azul};
    font-weight: 700;
    font-size: 1rem;
    transition: 400ms;
    background-color: transparent;
  }
`

export const BotaoVermelho = styled(Botao)`
  background-color: ${variaveis.vermelho};
  outline-color: ${variaveis.vermelho};
`
export const BotaoVerde = styled(Botao)`
  background-color: ${variaveis.verde};
  outline-color: ${variaveis.verde};
`

export default GlobalStyles

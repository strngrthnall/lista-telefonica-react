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
export const Container = styled.div``

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

export default GlobalStyles

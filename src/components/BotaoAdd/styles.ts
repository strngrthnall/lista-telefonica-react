import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const BotaoAddStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
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
export default BotaoAddStyle

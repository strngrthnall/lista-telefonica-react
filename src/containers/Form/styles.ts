import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { BotaoVerde } from '../../styles'

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`
export const BotaoSalvar = styled(BotaoVerde)`
  padding: 8px 16px;
  color: ${variaveis.azul};
  width: 40%;

  &:hover {
    color: ${variaveis.branco};
  }
`

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  height: 260px;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: rgba(65, 65, 65, 0.308);
  border: 1px solid rgba(255, 255, 255, 0.089);

  img {
    max-width: 40%;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  textarea {
    max-width: fit-content;
    display: flex;
    text-align: center;
    background-color: transparent;
    border: none;
    resize: none;
  }
`
export const Nome = styled.textarea`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1.2px;
  color: white;
`
export const Tel = styled.textarea`
  font-weight: 500;
  font-size: 0.9em;
  letter-spacing: 1.2px;
  color: ${variaveis.cinza};
`
export const Email = styled.textarea`
  font-size: 0.7em;
  font-weight: 500;
  color: ${variaveis.cinza};
`

export const ContainerBotoes = styled.div`
  display: flex;
  gap: 4px;
`

export const BotaoAmarelo = styled(Botao)`
  background-color: ${variaveis.amarelo};
  outline-color: ${variaveis.amarelo};
`

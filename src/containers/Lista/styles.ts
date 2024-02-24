import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ListaContainer = styled.div`
  height: 290px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`
export const CardsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  z-index: 999;
  left: 0;
  transition: all 1s ease;
`

export const BotaoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`

export const BotaoCarousel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  margin: 0 8px;
  background-color: ${variaveis.branco};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  p {
    color: ${variaveis.azul};
    font-weight: 700;
    font-size: 1rem;
    background-color: transparent;
  }
`

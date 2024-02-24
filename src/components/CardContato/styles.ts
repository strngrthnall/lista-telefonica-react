import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  height: 260px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: rgba(65, 65, 65, 0.308);
  border: 1px solid rgba(255, 255, 255, 0.089);

  &::before {
    width: 100px;
    height: 100px;
    content: '';
    position: absolute;
    background-color: ${variaveis.verde};
    z-index: -1;
    filter: blur(0.7rem);
    border-radius: 50%;
    left: 110px;
    top: 50px;
    transition: all 1s;
  }

  &:hover::before {
    transform: translate(-50px, 50px);
  }

  img {
    max-width: 40%;
    border-radius: 50%;
  }
`
export const Nome = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1.2px;
  color: white;
`
export const Tel = styled.p`
  font-weight: 500;
  font-size: 0.9em;
  letter-spacing: 1.2px;
  color: ${variaveis.cinza};
`
export const Email = styled.p`
  font-size: 0.7em;
  font-weight: 500;
  color: ${variaveis.cinza};
`

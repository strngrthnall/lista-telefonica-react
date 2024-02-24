import { useSelector } from 'react-redux'

import CardContato from '../../components/CardContato'
import * as S from './styles'
import { RootReducer } from '../../store'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.ListaContainer>
      <S.CardsContainer>
        <CardContato />
        <CardContato />
        <CardContato />
      </S.CardsContainer>
      <S.BotaoContainer>
        <S.BotaoCarousel>
          <p>L</p>
        </S.BotaoCarousel>
        <S.BotaoCarousel>
          <p>R</p>
        </S.BotaoCarousel>
      </S.BotaoContainer>
    </S.ListaContainer>
  )
}

export default Lista

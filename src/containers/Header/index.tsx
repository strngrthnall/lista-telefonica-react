import { useDispatch, useSelector } from 'react-redux'

import BotaoAdd from '../../components/BotaoAdd'
import * as GS from '../../styles'
import HeaderStyle from './styles'

import { RootReducer } from '../../store'
import { termoPesquisado } from '../../store/reducers/pesquisa'

const Header = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)

  return (
    <HeaderStyle>
      <GS.CampoTxt
        type="text"
        placeholder="Pesqisar"
        value={termo}
        onChange={(evento) => dispatch(termoPesquisado(evento.target.value))}
      />
      <BotaoAdd />
    </HeaderStyle>
  )
}

export default Header

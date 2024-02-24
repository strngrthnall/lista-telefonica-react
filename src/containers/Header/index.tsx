import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import BotaoAdd from '../../components/BotaoAdd'
import * as GS from '../../styles'
import HeaderStyle, * as S from './styles'

import { RootReducer } from '../../store'
import { termoPesquisado } from '../../store/reducers/pesquisa'

type Props = {
  barraPesquisa: boolean
}

const Header = ({ barraPesquisa }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)

  return (
    <HeaderStyle>
      <div>
        {barraPesquisa ? (
          <>
            <GS.CampoTxt
              type="text"
              placeholder="Pesqisar"
              value={termo}
              onChange={(evento) =>
                dispatch(termoPesquisado(evento.target.value))
              }
            />
            <BotaoAdd />
          </>
        ) : (
          <>
            <S.BotaoCancelar onClick={() => navigate('/')}>
              Cancelar Edição
            </S.BotaoCancelar>
          </>
        )}
      </div>
    </HeaderStyle>
  )
}

export default Header

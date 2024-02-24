import BotaoAdd from '../../components/BotaoAdd'
import * as GS from '../../styles'
import HeaderStyle from './styles'

const Header = () => {
  return (
    <HeaderStyle>
      <GS.CampoTxt type="text" placeholder="Pesqisar" />
      <BotaoAdd />
    </HeaderStyle>
  )
}

export default Header

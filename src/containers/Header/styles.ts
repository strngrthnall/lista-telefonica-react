import styled from 'styled-components'
import { BotaoVermelho } from '../../styles'

const Header = styled.header`
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 64px;
  }
`
export const BotaoCancelar = styled(BotaoVermelho)`
  padding: 8px 16px;
  width: 40%;
`
export default Header

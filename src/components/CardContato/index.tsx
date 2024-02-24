import Contato from '../../model/Contato'
import * as S from './styles'

type Props = Contato

const CardContato = ({ nome, email, telefone }: Props) => {
  return (
    <S.CardContainer>
      <img src="https://placehold.co/400x400" alt="Foto Contato" />
      <S.Nome>{nome}</S.Nome>
      <S.Tel>{telefone}</S.Tel>
      <S.Email>{email}</S.Email>
    </S.CardContainer>
  )
}
export default CardContato

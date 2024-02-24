import * as S from './styles'

const CardContato = () => {
  return (
    <S.CardContainer>
      <img src="https://placehold.co/400x400" alt="Foto Contato" />
      <S.Nome>Nome Contato</S.Nome>
      <S.Tel>(99) 99999-9999</S.Tel>
      <S.Email>contato@exemplo.com</S.Email>
    </S.CardContainer>
  )
}
export default CardContato

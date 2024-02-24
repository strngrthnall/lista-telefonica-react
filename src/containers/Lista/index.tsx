import { useSelector } from 'react-redux'

import CardContato from '../../components/CardContato'
import * as S from './styles'
import { RootReducer } from '../../store'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)

  const filtroContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      console.log(contatosFiltrados)
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtroContatos()

  return (
    <S.ListaContainer>
      {itens.length > 0 ? (
        <S.CardsContainer>
          {contatos.length > 0 ? (
            contatos.map((c) => (
              <li key={c.id}>
                <CardContato
                  id={c.id}
                  nome={c.nome}
                  email={c.email}
                  telefone={c.telefone}
                />
              </li>
            ))
          ) : (
            <S.ResultadoPesquisa>
              A pesquisa não retornou resultados.
            </S.ResultadoPesquisa>
          )}
        </S.CardsContainer>
      ) : (
        <S.ResultadoPesquisa>
          Está meio vazio por aqui. Adicione um novo contato!
        </S.ResultadoPesquisa>
      )}
    </S.ListaContainer>
  )
}

export default Lista

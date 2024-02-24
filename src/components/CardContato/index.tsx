import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import ContatoClass from '../../model/Contato'
import { editar, remover } from '../../store/reducers/contatos'

import * as S from './styles'
import * as GS from '../../styles'

type Props = ContatoClass

const CardContato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  useEffect(() => {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [emailOriginal, telefoneOriginal, nomeOriginal])

  function cancelaEdicao() {
    setEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.CardContainer>
      <img src="https://placehold.co/400x400" alt="Foto Contato" />
      <S.Nome
        disabled={!editando}
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <S.Tel
        disabled={!editando}
        value={telefone}
        onChange={(event) => setTelefone(event.target.value)}
      />
      <S.Email
        disabled={!editando}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <S.ContainerBotoes>
        {!editando ? (
          <>
            <S.BotaoAmarelo
              type="button"
              onClick={() => {
                setEditando(true)
                console.log(editando)
              }}
            >
              Editar
            </S.BotaoAmarelo>
            <GS.BotaoVermelho
              type="button"
              onClick={() => dispatch(remover(id))}
            >
              Remover
            </GS.BotaoVermelho>
          </>
        ) : (
          <>
            <GS.BotaoVerde
              onClick={() => {
                dispatch(editar({ nome, email, telefone, id }))
                setEditando(false)
              }}
            >
              Salvar
            </GS.BotaoVerde>
            <GS.BotaoVermelho
              onClick={() => {
                cancelaEdicao()
                console.log(editando)
              }}
            >
              Cancelar
            </GS.BotaoVermelho>
          </>
        )}
      </S.ContainerBotoes>
    </S.CardContainer>
  )
}
export default CardContato

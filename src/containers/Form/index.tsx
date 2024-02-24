import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as GS from '../../styles'
import { BotaoSalvar, FormContainer } from './styles'
import { criarNovoContato } from '../../store/reducers/contatos'

const NovoContatoForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const salvarNovoContato = (event: FormEvent) => {
    event.preventDefault()
    dispatch(criarNovoContato({ nome, telefone, email }))
    navigate('/')
  }

  return (
    <GS.Container>
      <FormContainer onSubmit={salvarNovoContato}>
        <GS.CampoTxt
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        ></GS.CampoTxt>
        <GS.CampoTxt
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
        ></GS.CampoTxt>
        <GS.CampoTxt
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        ></GS.CampoTxt>
        <BotaoSalvar type="submit">Salvar Contato</BotaoSalvar>
      </FormContainer>
    </GS.Container>
  )
}

export default NovoContatoForm

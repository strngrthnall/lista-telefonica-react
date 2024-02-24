import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../model/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'José da Silva',
      email: 'dasilvajose@teste.com',
      telefone: '(99) 99999-9999'
    },
    {
      id: 2,
      nome: 'Josué da Moura',
      email: 'jsuémoura@teste.com',
      telefone: '(99) 99999-9999'
    },
    {
      id: 3,
      nome: 'Claudionor da Moura',
      email: 'claudinho@teste.com',
      telefone: '(99) 99999-9999'
    },
    {
      id: 4,
      nome: 'Jezebel Castro',
      email: 'castrojezebel@teste.com',
      telefone: '(99) 99999-9999'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<Contato>) => {
      const contatoIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contatoIndex >= 0) {
        state.itens[contatoIndex] = action.payload
        console.log(state.itens[contatoIndex])
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    criarNovoContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoRepetido = state.itens.find(
        (contato) =>
          contato.telefone === action.payload.telefone ||
          contato.email === action.payload.email
      )
      contatoRepetido
      if (contatoRepetido) {
        alert('O contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { editar, remover, criarNovoContato } = contatoSlice.actions

export default contatoSlice.reducer

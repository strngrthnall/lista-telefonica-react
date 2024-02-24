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
      email: 'dasilvajose@gmail.com',
      telefone: '(99) 99999-9999'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    placeholderReducer: (state, action: PayloadAction<number>) => {
      console.log(state.itens + action.payload.toString())
    }
  }
})

export const { placeholderReducer } = contatoSlice.actions

export default contatoSlice.reducer

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PesquisaState = {
  termo?: string
}

const initialState: PesquisaState = {
  termo: ''
}

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState,
  reducers: {
    termoPesquisado: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { termoPesquisado } = pesquisaSlice.actions
export default pesquisaSlice.reducer

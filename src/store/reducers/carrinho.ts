import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload

      if (state.itens.find((produto) => produto.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionarCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer

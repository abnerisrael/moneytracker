import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { As, Transaction, Type } from '../../../../data/interfaces/transaction.i'

export interface TransactionState extends Transaction {}

const initialState: TransactionState = {
  id: undefined,
  what: '',
  how_much: 0,
  where:'',
  when: '',
  as: undefined,
  type: undefined
}

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setWhat: (state, action: PayloadAction<string>) => {
      state.what = action.payload
    },
    setHowMuch: (state, action: PayloadAction<number>) => {
      state.how_much = action.payload
    },
    setWhere: (state, action: PayloadAction<string>) => {
      state.where = action.payload
    },
    setWhen: (state, action: PayloadAction<string>) => {
      state.when = action.payload
    },
    setAs: (state, action: PayloadAction<As>) => {
      state.as = action.payload
    },
    setType: (state, action: PayloadAction<Type>) => {
      state.type = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setWhat, setHowMuch, setWhere, setWhen, setAs, setType} = transactionSlice.actions

export default transactionSlice.reducer
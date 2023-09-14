import { useSelector, useDispatch } from 'react-redux'
import * as reducer from './transactionSlice'
import { RootState } from '../../store'
import { As, Type } from '../../../../data/interfaces/transaction.i';

export function useTransaction() {
  const dispatch = useDispatch();

  const transactionState = useSelector((state: RootState) => state.transaction)

  const setWhat = (what: string) => dispatch(reducer.setWhat(what));

  const setHowMuch = (howmuch: number) => dispatch(reducer.setHowMuch(howmuch));

  const setWhere = (where: string) => dispatch(reducer.setWhere(where));

  const setWhen = (what: string) => dispatch(reducer.setWhen(what));

  const setAs = (as: As) => dispatch(reducer.setAs(as));

  const setType = (type: Type) => dispatch(reducer.setType(type));

  return {
    transactionState,
    setWhat,
    setHowMuch,
    setWhere,
    setWhen,
    setAs,
    setType,
  }
}
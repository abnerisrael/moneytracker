import { TransactionForm } from "../../data/interfaces/transaction.i";

const create = (data: TransactionForm) => {};

const update = (id: number) => {};

const del = (id: number) => {};

const useTransactionUC = () => ({
  create,
  update,
  delete
});

export default useTransactionUC;
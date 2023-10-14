import { Transaction } from "../../../data/interfaces/transaction.i";
import { register } from "../../../domain/usecases/transaction.uc";
import { useTransaction } from "../../redux/features/transaction/useTransaction"

export function useRegisterTransactionViewModel() {
    const {transactionState} = useTransaction();

    const registerTransaction = () => {
        const transaction = transactionState as Transaction;
        register(transaction).catch(e => console.error(e));
    }

    return {
        registerTransaction
    }
}

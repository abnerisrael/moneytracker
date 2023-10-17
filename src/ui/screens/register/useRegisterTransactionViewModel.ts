import { useRealm } from "../../../data/database";
import { Transaction } from "../../../data/database/models/transaction.model";
import { useTransaction } from "../../redux/features/transaction/useTransaction";

export function useRegisterTransactionViewModel() {
    const realm = useRealm();
    const {transactionState} = useTransaction();

    const registerTransaction = async () => {
        const transaction = new Transaction(transactionState);
        try {

            realm.write(() => {
                const created = realm.create(transaction.getSchemaName(), transaction);
                console.log('created', created);
            });

        } catch (e) {
            console.error(e);
        } finally {
            realm.close();
        }
    }

    return {
        registerTransaction
    }
}

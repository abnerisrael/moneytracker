import { useNavigation } from "@react-navigation/native";
import { useRealm } from "../../../data/database";
import { Transaction } from "../../../data/database/models/transaction.model";
import { useTransaction } from "../../redux/features/transaction/useTransaction";
import { Routes } from "../../navigation/routes";

export function useRegisterTransactionScreenViewModel() {
    const realm = useRealm();
    const {transactionState} = useTransaction();

    const {navigate} = useNavigation();

    const registerTransaction = async () => {
        try {
            const transaction = Transaction.generate(transactionState);

            realm.write(() => {
                const created = realm.create(Transaction.schema.name, transaction);
                console.log('created', created);
            });

            navigate(Routes.Authenticated.tracker);

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

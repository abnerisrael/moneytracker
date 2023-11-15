import { useNavigation } from "@react-navigation/native";
import { useRealm } from "../../../data/database";
import { Transaction } from "../../../data/database/models/transaction.model";
import { Routes } from "../../navigation/routes";
import { useDateTimerPicker } from "../../hooks/useDateTimePicker";
import { Type, TransactionForm } from "../../../data/interfaces/transaction.i";

export function useRegisterTransactionScreenViewModel() {
    const realm = useRealm();

    const {navigate} = useNavigation();

    const datePicker = useDateTimerPicker();

    const onSubmit = async (formData: TransactionForm) => {
        try {

            const transaction = Transaction.generate({...formData});

            realm.write(() => {
                const created = realm.create(Transaction.schema.name, transaction);
                console.log('created', created);
            });

            navigate(Routes.Authenticated.tracker);

        } catch (e) {
            console.error(e);
        }
    }

    return {
        onSubmit,
        datePicker
    }
}

import { useNavigation } from "@react-navigation/native";
import { useDateTimerPicker } from "../../hooks/useDateTimePicker";
import { TransactionForm } from "../../../data/interfaces/transaction.i";
import { Transaction } from "../../../data/database/models/transaction.model";
import { RegisterScreenParams } from "../../navigation/MainStackNavigation";
import { useObject, useRealm } from "../../../data/database";
import { dateToMoment } from "../../../domain/Util";

export function useRegisterScreenViewModel({_id, scenarie, type}: RegisterScreenParams) {
    const realm = useRealm();

    const {navigate} = useNavigation();

    const datePicker = useDateTimerPicker();

    const transaction = useObject(Transaction, _id);
    
    const onSubmit = async (formData: TransactionForm) => {
        try {

            const transaction = Transaction.generate({...formData});

            realm.write(() => {

                if (scenarie === 'create') {
                    const created = realm.create(Transaction.schema.name, transaction);
                    console.log('created', created);
                }
                else if (scenarie === 'update') {
                    const updated = realm.create(Transaction.schema.name, {...transaction, _id}, "modified");
                    console.log('updated', updated);
                }
            });

            navigate('Tracker');

        } catch (e) {
            console.error(e);
        }
    }

    const defaultValues = scenarie === 'update' && transaction ? {
        as: transaction.as,
        how_much: transaction.how_much.toString(),
        type: transaction.type,
        what: transaction.what,
        when: dateToMoment(transaction.when).format("DD/MM/Y"),
        where: transaction.where,
    } : {
        when: datePicker.getDate().format('DD/MM/Y'),
        type,
        as: "",
        how_much: "",
        what: "",
        where: "",
    };

    const title = type === "input" ? 'Input Register' : 'Output Register';

    return {
        onSubmit,
        datePicker,
        defaultValues,
        title
    }
}

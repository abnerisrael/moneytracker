import { useNavigation } from "@react-navigation/native";
import { useRealm } from "../../../data/database";
import { Transaction } from "../../../data/database/models/transaction.model";
import { Routes } from "../../navigation/routes";
import { useDateTimerPicker } from "../../hooks/useDateTimePicker";
import { Type } from "../../../data/interfaces/transaction.i";

export function useRegisterTransactionScreenViewModel(typeTransaction: Type) {
    const realm = useRealm();

    const {navigate} = useNavigation();

    const datePicker = useDateTimerPicker();

    const formatHowMuch = (value: string) => {
        // Use uma expressão regular para extrair os dígitos e a vírgula.
        const matches = value.match(/(\d|,|\.)+/g);
        if(!matches) return NaN;
        // Combine os dígitos e substitua a vírgula pela notação de ponto.
        const valorNumerico = parseFloat(matches.join('').replace(',', '.'));
        return valorNumerico;
    }

    const onSubmit = async (formData: any) => {
        try {
            
            if (formData?.how_much) {
                formData.how_much = formatHowMuch(formData?.how_much);
            }

            formData = {...formData, type: typeTransaction};

            console.log('formData', formData);

            const transaction = Transaction.generate(formData);

            console.log(transaction);

            realm.write(() => {
                const created = realm.create(Transaction.schema.name, transaction);
                console.log('created', created);
            });

            navigate(Routes.Authenticated.tracker);

        } catch (e) {
            console.error(e);
        } finally {
            // realm.close();
        }
    }

    return {
        onSubmit,
        datePicker
    }
}

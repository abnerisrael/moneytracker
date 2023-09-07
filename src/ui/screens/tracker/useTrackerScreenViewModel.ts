import { useEffect, useState } from "react";
import { Transaction } from "../../../data/interfaces/transaction.i";
import { getAll } from "../../../domain/usecases/transaction.uc";

export function useTrackerScreenViewModel() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {

        let isGeting = true;

        const getTransactions = () => {
            getAll()
            .then((data) => setTransactions(data))
            .catch((e) => console.error(e));
        }

        if (isGeting) {
            getTransactions();
            isGeting = false;
        }

    }, []);

    return {
        transactions
    }
}
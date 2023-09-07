import { useEffect, useState } from "react";
import { Transaction } from "../../../data/interfaces/transaction.i";
import { getAll } from "../../../domain/usecases/transaction.uc";

export function useTrackerScreenViewModel() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [totalInputs, setTotalInputs] = useState<number>(0);
    const [totalOutputs, setTotalOutputs] = useState<number>(0);

    async function calculateTotalIntpus(transactions: Transaction[]): Promise<number> {
        const inputs = await transactions.filter(transaction => transaction.type == "input");
        const soma = inputs.reduce((acumulador, transaction) => {
            return acumulador + transaction.how_much;
        }, 0);
        return soma;
    }
    
    async function calculateTotalOutputs(transactions: Transaction[]): Promise<number> {
        const inputs = await transactions.filter(transaction => transaction.type == "output");
        const soma = inputs.reduce((acumulador, transaction) => {
            return acumulador + transaction.how_much;
        }, 0);
        return soma;
    }
    
    useEffect(() => {
        calculateTotalIntpus(transactions).then(total => setTotalInputs(total));
        calculateTotalOutputs(transactions).then(total => setTotalOutputs(total));
    }, [transactions]);
    

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
        transactions,
        totalInputs,
        totalOutputs
    }
}
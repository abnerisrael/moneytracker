import { useCallback, useState} from "react";
import { useQuery } from "../../../data/database";
import { Transaction as iTransaction } from "../../../data/interfaces/transaction.i";
import { Transaction } from "../../../data/database/models/transaction.model";
import { useFocusEffect } from "@react-navigation/native";

export function useTrackerScreenViewModel() {
    const [transactions, setTransactions] = useState<iTransaction[]>([])
    const [totalInputs, setTotalInputs] = useState<number>(0);
    const [totalOutputs, setTotalOutputs] = useState<number>(0);

    const transactionQuery = useQuery(Transaction);

    useFocusEffect(useCallback(() => {
        const transactions = transactionQuery.map(transaction => transaction as iTransaction);
        setTransactions(transactions);
    }, [transactionQuery]))



    console.log('transactions', transactions)

    async function calculateTotalIntpus(): Promise<number> {
        const inputs = await transactions.filter(transaction => transaction.type == "input");
        const soma = inputs.reduce((acumulador, transaction) => {
            return acumulador + transaction.how_much;
        }, 0);
        return soma;
    }
    
    async function calculateTotalOutputs(): Promise<number> {
        const inputs = await transactions.filter(transaction => transaction.type == "output");
        const soma = inputs.reduce((acumulador, transaction) => {
            return acumulador + transaction.how_much;
        }, 0);
        return soma;
    }
    
    return {
        transactions,
        totalInputs,
        totalOutputs
    }
}
import { useQuery } from "../../../data/database";
import { Transaction } from "../../../data/database/models/transaction.model";

export function useTrackerScreenViewModel() {
    const transactions = useQuery(Transaction);

    const totalInputs = transactions.filtered("type == $0", 'input').sum('how_much');
    const totalOutputs = transactions.filtered("type == $0", 'output').sum('how_much');
    const totalAvaliable = totalInputs - totalOutputs;

    return {
        totalInputs,
        totalOutputs,
        totalAvaliable
    }
}
import { Transaction } from "../../data/interfaces/transaction.i";
import * as repo from "../../data/repositories/transaction.repo"

export async function getAll() {
    return await repo.getAll();
}

export async function register(transaction: Transaction) {
    console.info('Registered Transaction', transaction);
}

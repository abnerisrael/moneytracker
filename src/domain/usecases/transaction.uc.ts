import * as repo from "../../data/repositories/transaction.repo"

export async function getAll() {
    return await repo.getAll();
}

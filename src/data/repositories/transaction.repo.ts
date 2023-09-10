import { Transaction } from '../interfaces/transaction.i';
import * as api from '../sources/api/transaction.api';

// private collection = firestore.collection("users");
const collection = api.list();

// export async function create(transaction: Transaction): Promise<void> {
//     // await this.collection.add(transaction);
//     collection.push(transaction);
// }

// export async function getById(id: string): Promise<Transaction | undefined> {
//     // const doc = await this.collection.doc(id).get();
//     // if (doc.exists) {
//     //   return doc.data() as User;
//     // }
//     // return undefined;
//     return collection.find((transaction) => transaction.id === id);
// }

export async function getAll(): Promise<Transaction[]> {
    // const querySnapshot = await this.collection.get();
    // return querySnapshot.docs.map((doc) => doc.data() as User);
    if (!collection.length) return [];
    return collection.map((data) => data as Transaction);
}

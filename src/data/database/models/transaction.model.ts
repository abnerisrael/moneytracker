import { As, Type, Transaction as iTransaction } from "../../interfaces/transaction.i";
import { TransactionSchema } from "../schemas/transaction.schema";
import { DataBaseModel } from "./database.model";

export class Transaction extends DataBaseModel implements iTransaction {
  what!: string;
  how_much!: number;
  where!: string;
  when!: string;
  as!: As;
  type!: Type;

  constructor(data: iTransaction) {
    super(TransactionSchema, data);
    this.created_at = new Date();
  }
}

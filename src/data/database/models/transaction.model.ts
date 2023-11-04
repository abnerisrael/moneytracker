import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { As, Type, ITransaction as iTransaction } from "../../interfaces/transaction.i";
import { iDataBaseModel } from '../../interfaces/database.i';
import { ObjectSchema } from 'realm';
import { TransactionSchema } from '../schemas/transaction.schema';
import Realm from 'realm';

export class Transaction extends Realm.Object<Transaction> implements iDataBaseModel, iTransaction {
  _id!: string;
  what!: string;
  how_much!: number;
  where!: string;
  when!: string;
  as!: As;
  type!: Type;
  created_at!: Date;

  static schema: ObjectSchema = TransactionSchema;

  /**
   * Create a new Transaction
   * Object
   * @param transaction 
   * @returns 
   */
  static generate (transaction: iTransaction) {
    return Object.assign({}, {
      ...transaction,
       _id: uuidv4(),
       created_at: new Date()
      });
  }
}

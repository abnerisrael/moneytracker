import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { As, TransactionForm, Type, iTransaction } from "../../interfaces/transaction.i";
import { iDataBaseModel } from '../../interfaces/database.i';
import { ObjectSchema } from 'realm';
import { TransactionSchema } from '../schemas/transaction.schema';
import Realm from 'realm';
import moment from 'moment';
import { moneyToNumber } from '../../../domain/Util';

export class Transaction extends Realm.Object<Transaction> implements iDataBaseModel, iTransaction {
  _id!: string;
  what!: string;
  how_much!: number;
  where!: string;
  when!: Date;
  as!: As;
  type!: Type;
  created_at!: Date;

  static schema: ObjectSchema = TransactionSchema;

  /**
   * Create a new Transaction
   * Object from a FormData
   * @param transaction 
   * @returns 
   */
  static generate(formData: TransactionForm): iTransaction {

    const how_much = moneyToNumber(formData?.how_much);

    const when = moment(formData.when, "DD/MM/Y").toDate();

    const as = formData.as as As;

    const type = formData.type as Type

    const data = { ...formData, how_much, when, as, type };

    return Object.assign({}, {
      ...data,
      _id: uuidv4(),
      created_at: new Date()
    });
  }
}

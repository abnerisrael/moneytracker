import { ObjectSchema } from "realm";

export const TransactionSchema: ObjectSchema = {
  name: 'Transaction',
  properties: {
    _id: 'string',
    what: 'string',
    how_much: 'float',
    where: 'string',
    when: 'string',
    as: 'string',
    type: 'string',
    created_at: 'date',
  },
  primaryKey: '_id',
};

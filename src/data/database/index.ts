import Realm  from 'realm';
import {createRealmContext} from '@realm/react';
import { TransactionSchema } from './schemas/transaction.schema';


// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [TransactionSchema],
};

// Create a realm context
export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

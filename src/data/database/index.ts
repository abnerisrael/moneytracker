import Realm  from 'realm';
import {createRealmContext} from '@realm/react';
import { Transaction } from './models/transaction.model';


// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Transaction],
};

// Create a realm context
export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

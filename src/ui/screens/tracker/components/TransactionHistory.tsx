import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { SearchInput } from '../../../components/SearchInput';
import { TransactionsList } from './TransactionsList';
import { TransactionActions } from './TransactionActions';
import { Transaction } from '../../../../data/interfaces/transaction.i';

type TransactionHistoryProps = {
  transactions: Transaction[],
}

export const TransactionHistory = ({transactions}:TransactionHistoryProps) => {
  const [findedTransactions, setFindedTransactions] = useState<Transaction[]>([]);

  useEffect(()=> {
    setFindedTransactions(transactions);
  }, [transactions]);

  function searchObjectsInArrays(collection: Transaction[], searchText: string) {
    return collection.filter((transaction) => {
      return Object.values(transaction).some((value) => `${value}`.includes(searchText));
    });
  }

  function handleOnChangeText(searchText: string) {
    const finded = searchObjectsInArrays(transactions, searchText);
    setFindedTransactions(finded);
  }

    return (
        <TransactionHistoryView>
            <SearchInput onChangeText={handleOnChangeText}/>
            <TransactionListAreaView>
                <TransactionsList data={findedTransactions}/>
                <TransactionActions />
            </TransactionListAreaView>
        </TransactionHistoryView>
    );
}

const TransactionHistoryView =  styled.View`
  flex: 1;
`;
const TransactionListAreaView =  styled.View`
  flex: 1;
  margin-top: 20px;
`;

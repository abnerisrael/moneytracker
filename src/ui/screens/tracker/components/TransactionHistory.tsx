import React from 'react';
import styled from 'styled-components/native';
import { SearchInput } from '../../../components/SearchInput';
import { TransactionsList } from './TransactionsList';
import { TransactionActions } from './TransactionActions';

const transactions = require('../__mocks__/transactions.json');

export const TransactionHistory = () => {
    return (
        <TransactionHistoryView>
            <SearchInput />
            <TransactionListAreaView>
                <TransactionsList data={transactions}/>
                <TransactionActions onAddMoney={()=>{}} onRemoveMoney={()=>{}}/>
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

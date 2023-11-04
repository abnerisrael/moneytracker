import React from 'react';
import styled from 'styled-components/native';
import { SearchInput } from '../../../components/SearchInput';
import { TransactionsList } from './TransactionsList';

export const TransactionHistory = () => {
  return (
    <TransactionHistoryView>
      <SearchInput onChangeText={() => { }} />
      <TransactionListAreaView>
        <TransactionsList />
      </TransactionListAreaView>
    </TransactionHistoryView>
  );
}

const TransactionHistoryView = styled.View`
  flex: 1;
`;
const TransactionListAreaView = styled.View`
  flex: 1;
  margin-top: 20px;
`;

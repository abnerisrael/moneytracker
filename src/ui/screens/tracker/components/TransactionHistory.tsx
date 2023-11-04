import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SearchInput } from '../../../components/SearchInput';
import { TransactionsList } from './TransactionsList';

export const TransactionHistory = () => {

  const [searchText, setSearchText] = useState<string>('');

  const handleChangeSearchText = (text: string) => {
    setSearchText(text);
  }
  
  return (
    <TransactionHistoryView>
      <SearchInput onChangeText={handleChangeSearchText} />
      <TransactionListAreaView>
        <TransactionsList search={searchText} />
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

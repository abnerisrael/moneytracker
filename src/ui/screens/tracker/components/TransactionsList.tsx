import React from "react";
import styled from "styled-components/native";
import { Transaction } from "../../../../data/database/models/transaction.model";
import { Type } from "../../../../data/interfaces/transaction.i";
import { useQuery } from "../../../../data/database";
import { useNavigation } from "@react-navigation/native";
import { TransactionItem } from "./TransactionList/TransactionItem";

type TransactionListProps = {
    search?: string;
}

export const TransactionsList = ({search}: TransactionListProps) => {

    const {navigate} = useNavigation();

    const handleOnPressTransactionItem = (_id: string, type: Type) => {
        navigate('Register', {_id, type, scenarie: 'update'});
    }

    if (search?.length) {

        const transactions = useQuery(Transaction);

        const filtredTransactions = transactions.filtered(
            "what CONTAINS $0 SORT(when DESC)", 
            search
        );
            
        return (
            <TransactionListView>
                {filtredTransactions.map(transaction => (
                    <TransactionItem
                        key={transaction._id}
                        {...transaction}
                        onPress={handleOnPressTransactionItem}
                    />
                ))}
            </TransactionListView>
        );
    } 

    const transactionsQuery = useQuery(Transaction)
    .sorted('when', true);
    
    return (
        <TransactionListView>
           {transactionsQuery.map(transaction => (
                <TransactionItem
                    key={transaction._id}
                    {...transaction}
                    onPress={handleOnPressTransactionItem}
                />
            ))}
        </TransactionListView>
    );
};

const TransactionListView = styled.ScrollView`
  flex: 1;
`;

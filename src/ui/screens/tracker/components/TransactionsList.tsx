import React, { useCallback, useMemo } from "react";
import styled from "styled-components/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Transaction } from "../../../../data/database/models/transaction.model";
import { Transaction as ITransaction } from "../../../../data/interfaces/transaction.i";
import { useQuery, useRealm } from "../../../../data/database";

type TransactionListProps = {
    search?: string;
}

export const TransactionsList = ({search}: TransactionListProps) => {

    const realm = useRealm();

    if (search?.length) {

        const transactions = realm.objects<Transaction>(Transaction.schema.name);

        const filtredTransactions = transactions.filtered("what CONTAINS $0", search);
            
        return (
            <TransactionListView>
                {filtredTransactions.map(transaction => (
                    <TransactionItem
                        key={transaction._id}
                        {...transaction}
                    />
                ))}
            </TransactionListView>
        );
    } 

    const transactionsQuery = useQuery(Transaction);
    
    return (
        <TransactionListView>
           {transactionsQuery.map(transaction => (
                <TransactionItem
                    key={transaction._id}
                    {...transaction}
                />
            ))}
        </TransactionListView>
    );
};

const TransactionItem = (props: ITransaction) => {
    return (
        <TransactionItemView>
            <ItemLeft>
                <TransactionIconView>
                    <FontAwesome name="money" size={20} color="#000" style={{ alignSelf: 'center' }} />
                </TransactionIconView>
            </ItemLeft>
            <ItemCenter>
                <WhatLabel>{props.what}</WhatLabel>
                <HowMuchLabel>R$ {props.how_much}</HowMuchLabel>
                <WhereLabel>{props.where}</WhereLabel>
                <AsLabel>{props.as}</AsLabel>
            </ItemCenter>
            <ItemRight>
                <WhenLabel>{props.when}</WhenLabel>
            </ItemRight>
        </TransactionItemView>
    );
};


const TransactionListView = styled.ScrollView`
  flex: 1;
`;

const TransactionItemView = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 10px;
`;

const TransactionIconView = styled.View`
    border-radius: 100px;
    background-color: #f0f0f0;
    height: 50px;
    width: 50px;
    justify-content: center;
`;

const ItemLeft = styled.View`
    flex: 1;
    padding-top: 5px;
`;

const ItemCenter = styled.View`
    flex: 3;
`;

const ItemRight = styled.View`
    flex: 1;
`;

const WhatLabel = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: black;
`;

const HowMuchLabel = styled.Text`
    font-size: 16px;
    color: black;
`;

const WhereLabel = styled.Text`
    font-size: 16px;
    color: black;
`;

const WhenLabel = styled.Text`
    font-size: 16px;
    color: black;
`;

const AsLabel = styled.Text`
    font-size: 16px;
    color: black;
`;



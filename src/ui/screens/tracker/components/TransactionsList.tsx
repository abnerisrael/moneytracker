import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Transaction } from "../../../../data/interfaces/transaction.i";
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface TransactionListProps {
    data: Transaction[]
}

export const TransactionsList = (props: TransactionListProps) => {
    if (props.data.length < 2) {
        return <TransactionItem {...props.data[0]} />
    }

    return (
        <TransactionListView>
            <FlatList
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <TransactionItem {...item} />}
            />
        </TransactionListView>
    );
};


const TransactionItem = (props: Transaction) => {
    return (
        <TransactionItemView>
            <ItemLeft>
                <TransactionIconView>
                    <FontAwesome name="money" size={20} color="#000" style={{alignSelf: 'center'}}/>
                </TransactionIconView>
            </ItemLeft>
            <ItemCenter>
                <WhatLabel>{props.what}</WhatLabel>
                <HowMuchLabel>R$ {props.how_much}</HowMuchLabel>
                <WhereLabel>{props.where}</WhereLabel>
                <AsLabel>{props.as}</AsLabel>
            </ItemCenter>
            <ItemRight>
                <WhenLabel>1 AGO</WhenLabel>
            </ItemRight>
        </TransactionItemView>
    );
};


const TransactionListView = styled.View`
  flex: 1;
`;

const TransactionItemView = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 5px;
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



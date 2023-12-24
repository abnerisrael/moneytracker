import React from "react";
import styled from "styled-components/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import moment from "moment";
import { Type, iTransaction } from "../../../../../data/interfaces/transaction.i";
import { Color } from "../../../../styles/color";

interface TransactionItemProps extends iTransaction {
  onPress: (_id: string, type: Type) => void
}

export const TransactionItem = (props: TransactionItemProps) => {

  const handleOnPress = () => {
      props.onPress(props._id, props.type);
  };

  const when = moment(props.when).format('DD MMM');

  const iconName = props.type === 'input' ? 'plus' : 'minus';

  const iconColor =  props.type === 'input' ? Color.Money.Input : Color.Money.Output;

  return (
      <TransactionItemView onPress={handleOnPress}>
          <ItemLeft>
              <TransactionIconView>
                  <FontAwesome name={iconName} size={20} color={iconColor} style={{ alignSelf: 'center' }} />
              </TransactionIconView>
          </ItemLeft>
          <ItemCenter>
              <WhatLabel>{props.what}</WhatLabel>
              <HowMuchLabel>R$ {props.how_much}</HowMuchLabel>
              <WhereLabel>{props.where}</WhereLabel>
              <AsLabel>{props.as}</AsLabel>
          </ItemCenter>
          <ItemRight>
              <WhenLabel>{when}</WhenLabel>
          </ItemRight>
      </TransactionItemView>
  );
};

const TransactionItemView = styled.TouchableOpacity`
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
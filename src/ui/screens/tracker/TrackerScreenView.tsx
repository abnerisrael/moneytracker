import React from "react";
import styled from 'styled-components/native';
import { TransactionHistory } from "./components/TransactionHistory";
import { MonthReferenceSelector } from "./components/MonthReferenceSelector";

export const TrackerScreenView = () => {
  return (
    <ScreenView>
      <MonthReferenceSelector />
      <MoneyAvaliableView>
        <Subtitle>Saldo disponível</Subtitle>
        <LabelMoneyAvaliableLabel>R$ 1000,00</LabelMoneyAvaliableLabel>
        <EntradasSaidasView>
          <EntradasView>
            <Subtitle>Entradas</Subtitle>
            <LabelMoneyEntradaLabel>+ R$ 1500,00</LabelMoneyEntradaLabel>
          </EntradasView>
          <SaidasView>
            <Subtitle>Saídas</Subtitle>
            <LabelMoneySaidaLabel>- R$ 500,00</LabelMoneySaidaLabel>
          </SaidasView>
        </EntradasSaidasView>
      </MoneyAvaliableView>
      <HistoryAreaView>
        <TransactionHistory />
      </HistoryAreaView>
    </ScreenView>
  );
};

const Subtitle = styled.Text`
  color: black;
  font-size: 16px;
  line-height: 16.36px;
`;

const LabelMoneyAvaliableLabel = styled.Text`
  color: black;
  font-size: 28px;
`;

const LabelMoneyEntradaLabel = styled.Text`
  color: green;
  font-size: 28px;
`;

const LabelMoneySaidaLabel = styled.Text`
  color: red;
  font-size: 28px;
`;

const ScreenView =  styled.View`
  flex: 1;
  background-color: white;
  padding: 40px;
`;

const MoneyAvaliableView =  styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const EntradasSaidasView =  styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const EntradasView =  styled.View``;

const SaidasView =  styled.View``;

const HistoryAreaView =  styled.View`
  flex: 5;
  margin-top: 20px;
`;
  
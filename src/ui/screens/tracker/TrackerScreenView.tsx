import React from "react";
import styled from 'styled-components/native';
import { TransactionHistory } from "./components/TransactionHistory";
import { MonthReferenceSelector } from "./components/MonthReferenceSelector";
import { useTrackerScreenViewModel } from "./useTrackerScreenViewModel";
import { TransactionActions } from "./components/TransactionActions";
import { Color } from "../../styles/color";

export const TrackerScreenView = () => {

  const {totalAvaliable, totalInputs, totalOutputs} = useTrackerScreenViewModel();

  return (
    <ScreenView>
      <MonthReferenceSelector />
      <MoneyAvaliableView>
        <Subtitle>Saldo disponível</Subtitle>
        <LabelMoneyAvaliableLabel>R$ {totalAvaliable}</LabelMoneyAvaliableLabel>
        <EntradasSaidasView>
          <EntradasView>
            <Subtitle>Entradas</Subtitle>
            <LabelMoneyEntradaLabel>+ R$ {totalInputs}</LabelMoneyEntradaLabel>
          </EntradasView>
          <SaidasView>
            <Subtitle>Saídas</Subtitle>
            <LabelMoneySaidaLabel>- R$ {totalOutputs}</LabelMoneySaidaLabel>
          </SaidasView>
        </EntradasSaidasView>
      </MoneyAvaliableView>
      <HistoryAreaView>
        <TransactionHistory />
        <TransactionActions />
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
  color: ${Color.Money.Input};
  font-size: 28px;
`;

const LabelMoneySaidaLabel = styled.Text`
  color: ${Color.Money.Output};
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
  
import React from "react";
import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export const WhatScreenView = () => {

  const {navigate} = useNavigation();

  const handleNext = () => navigate('howmuch');

  return (
    <ScreenView>
      <Input 
        multiline
        numberOfLines={4} 
        placeholder="What"
      />
      <TransactionIconView onPress={handleNext}>
        <FontAwesome name="arrow-right" size={20} color="#000" style={{alignSelf: 'center'}}/>
      </TransactionIconView>
    </ScreenView>
  );
};

const Input = styled.TextInput`
  flex: 1;
  border-bottom: 1px solid black;
  font-size: 28px;
  height: 100px;
`;

const TransactionIconView = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 50px;
  background-color: #f0f0f0;
  height: 50px;
  width: 100%;
  justify-content: center;
  padding: 10px;
`;

const ScreenView =  styled.View`
  flex: 1;
  background-color: white;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

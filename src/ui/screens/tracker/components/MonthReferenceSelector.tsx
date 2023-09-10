import React from 'react';
import styled from 'styled-components/native';


export const MonthReferenceSelector = () => {
    return(
        <MonthReferenceView>
            <MonthSelectorButton onPress={() => {}}>
                <LabelMonth>Março 2023</LabelMonth>
            </MonthSelectorButton>
        </MonthReferenceView>
    )
};

const MonthReferenceView =  styled.View`
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const MonthSelectorButton = styled.TouchableOpacity`
    border-radius: 50px;
    background-color: #f0f0f0;
    height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
    `;

const LabelMonth = styled.Text`
    color: black;
    font-weight: bold;
`;

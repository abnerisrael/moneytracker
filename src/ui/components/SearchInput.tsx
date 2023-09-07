import React from 'react';
import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type SearchInputProps = {
    onChangeText: (text: string) => void
}

export const SearchInput = ({onChangeText}: SearchInputProps) => {
    return (
        <SearchInputView>
            <FontAwesome name="search" size={20} color="#838383" style={{alignSelf: 'center'}}/>
            <Input placeholder='Buscar' placeholderTextColor="#838383" onChangeText={onChangeText}/>
        </SearchInputView>
    );
};

const SearchInputView = styled.View`
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 50px;
    flex-direction: row;
`;

const Input = styled.TextInput `
    flex: 1;
    background-color: transparent;
    margin-left: 10px;
`;

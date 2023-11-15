import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { Color } from '../styles/color';
import Tipography from '../styles/tipography';

type FiledTextInputProps = TextInputProps & {
  label: string
}

export const FiledTextInput = (props: FiledTextInputProps) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  }

  const handleBlur = () => {
    setFocused(false);
  }

  return (
    <Container>
      <InputLabel focused={focused}>{props.label}</InputLabel>
      <ContainerInput focused={focused}>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </ContainerInput>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ContainerInput = styled.View<{focused: boolean}>`
  border: 2px solid ${({focused}) => focused ? Color.Primary : Color.Black};
  border-radius: 10px;
  height: 56px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
`;

const Input = styled.TextInput`
  font-size: ${Tipography.Label.Small.size}px;
`;

const InputLabel = styled.Text<{focused: boolean}>`
  font-size: ${Tipography.Label.Large.size}px;
  color: ${({focused}) => focused ? Color.Primary : Color.Black};
  margin-bottom: 10px;
`;

import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Tipography from '../styles/tipography';
import { Color } from '../styles/color';

type Props = React.ComponentPropsWithRef<
  typeof TouchableOpacity
> & {
  label?: string;
  type: 'primary' | 'secondary';
  leftIcon?: React.ReactNode
};

export const Button = ({
  label,
  onPress,
  leftIcon,
  ...restProps
}: Props) => {
  return (
    <Touchable onPress={onPress} {...restProps}>
      {leftIcon && <Left>{leftIcon}</Left>}
      <Label>{label}</Label>
    </Touchable>
  );
};

const Touchable = styled.TouchableOpacity<{disabled: boolean, type: string}>`
  height: 60px;
  background-color: #FFF;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px ${({type}) => type === 'secondary' ? Color.Black : Color.Primary};
`;

const Label = styled.Text`
  font-size: ${Tipography.Label.Large.size}px;
  font-weight: ${Tipography.Label.Large.weight};
  color: #000;
`;

const Left = styled.View`
  margin-right: 10px;
`

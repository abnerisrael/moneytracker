import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Tipography from '../styles/tipography';
import { Color } from '../styles/color';

type Props = React.ComponentPropsWithRef<
  typeof TouchableOpacity
> & {
  label?: string;
  leftIcon?: React.ReactNode
};

export const TextButton = ({
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

const Touchable = styled.TouchableOpacity<{disabled?: boolean}>`
  height: 40px;
  background-color: #FFF;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Label = styled.Text<{disabled?: boolean}>`
  font-size: ${Tipography.Label.Medium.size}px;
  font-weight: ${Tipography.Label.Medium.weight};
  color:  ${({disabled}) => disabled ? Color.OpacityGray : Color.Black};
`;

const Left = styled.View`
  margin-right: 10px;
`

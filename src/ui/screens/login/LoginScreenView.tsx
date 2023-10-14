import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';

const googleIcon = require('../../assets/img/google-icon.png');
const logo = require('../../assets/img/logo.png');

const SocialIcon = () => (
  <Icon source={googleIcon} />
)


const LoginScreenView = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate(Routes.Authenticated.presentation)
  };

  return (
    <ScreenView>
      <Logo source={logo} resizeMode="center" />
      <Button
        onPress={handleLogin}
        type='secondary'
        label='Entrar com Google'
        leftIcon={<SocialIcon />}
      />
    </ScreenView>
  );
}

const ScreenView =  styled.View`
  flex: 1;
  background-color: white;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 1;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;



export default LoginScreenView;
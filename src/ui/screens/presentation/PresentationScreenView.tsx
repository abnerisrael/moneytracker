import React, { useState } from 'react';
import styled from 'styled-components/native';
import Tipography from '../../styles/tipography';
import { FlatList } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Color } from '../../styles/color';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';

const slides = [
  {
    key: 'one',
    text: 'Anotar seus hábitos financeiros é a primeira coisa a fazer para alcançar sua liberdade financeira!',
    image: require('../../assets/img/presentation/one.jpg'),

  },
  {
    key: 'two',
    text: 'Para obter um melhor resultado registre seus gastos e ganhos por um mês ...',
    image: require('../../assets/img/presentation/two.jpg'),
  },
  {
    key: 'three',
    text: '... e então descubra quais são os hábitos que estão roubando seu dinheiro através dos nosso relatórios.',
    image: require('../../assets/img/presentation/three.png'),
  },
  {
    key: 'four',
    text: 'Alcance a sua liberdade financeira a partir de agora!',
    image: require('../../assets/img/presentation/four.jpg'),
  }
];

const Slide = (item: {
  key: string,
  text: string,
  image: any,
}) => {
  return (
    <SlideView>
      <SlideImage source={item.image} resizeMode="center" />
      <SlideText>{item.text}</SlideText>
    </SlideView>
  )
}

const PrevButton = () => (<SecondaryLabel>Anterior</SecondaryLabel>)
const NextButton = () => (<PrimaryLabel>Próximo</PrimaryLabel>)
const DoneButton = () => (<PrimaryLabel>Iniciar</PrimaryLabel>)


const PresentationScreenView = () => {
  const navigation = useNavigation();

  const handleOnDone = () => navigation.navigate(Routes.Authenticated.tracker)

  return (
    <AppIntroSlider
      renderItem={({item}) => <Slide {...item}/>} 
      data={slides} 
      showNextButton={true}
      renderNextButton={NextButton}
      showPrevButton={true}
      renderPrevButton={PrevButton}
      showDoneButton={true}
      renderDoneButton={DoneButton}
      activeDotStyle={{backgroundColor: Color.Gray}}
      onDone={handleOnDone}
    />
  );
}
const SlideView =  styled.View`
  flex: 1;
  background-color: white;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

const SlideText= styled.Text`
  font-size: ${Tipography.Label.Large.size}px;
  margin-top: 20px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 1;
`;

const PrimaryLabel = styled.Text`
  font-size: ${Tipography.Label.Large.size}px;
  color: ${Color.Primary};
  `;

const SecondaryLabel = styled(PrimaryLabel)`
  color: ${Color.Gray};
`;

export default PresentationScreenView;

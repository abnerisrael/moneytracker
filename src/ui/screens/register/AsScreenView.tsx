import React, {useState} from "react";
import { StyleSheet } from "react-native";
import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { useTransaction } from "../../redux/features/transaction/useTransaction";
import { As } from "../../../data/interfaces/transaction.i";
import { Chip } from "../../components/Chips";
import { FontAwesomeIconsName } from "../../components/IconsName";

export const AsScreenView = () => {

  const [payment, setPayment] = useState<As | undefined>();

  const {navigate} = useNavigation();

  const {setAs} = useTransaction();

  const handleNext = () => {
    setAs(payment as As);
    navigate('save');
  };

  type PaymentTypes = {
    type: As,
    icon?: FontAwesomeIconsName
  };

  const paymentTypes: PaymentTypes[] = [
    {type: "CARD", icon: "credit-card-alt"},
    {type: "DEBIT", icon: "credit-card"},
    {type: "MONEY", icon: "money"},
    {type: "PIX", icon: "qrcode"},
    {type: "OTHER"},
  ]

  return (
    <ScreenView>
      <Label style={{marginBottom: 20}}>As</Label>
      <AreaChipsView>
        {paymentTypes.map(({type, icon}) => (
          <Chip key={type} selected={payment == type} icon={icon} onPress={() => setPayment(type)} style={styles.chip}>
            {type}
          </Chip>
        ))}
      </AreaChipsView>
      <NextButton onPress={handleNext}>
        <FontAwesome name="arrow-right" size={20} color="#000" style={{alignSelf: 'center'}}/>
      </NextButton>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginRight: 10,
    marginBottom: 10
  }
})

const NextButton = styled.TouchableOpacity`
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

const AreaChipsView =  styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 28;
`;

import React from "react";
import styled from 'styled-components/native';
import { As, TransactionForm } from "../../../data/interfaces/transaction.i";
import { FontAwesomeIconsName } from "../../components/IconsName";
import { Chip } from "../../components/Chips";
import { Keyboard, StyleSheet } from "react-native";
import Tipography from "../../styles/tipography";
import { FiledTextInput } from "../../components/FiledTextInput";
import { TextButton } from "../../components/TextButton";
import { OutlinedButton } from "../../components/OutlinedButton";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { Color } from "../../styles/color";
import { Masks } from 'react-native-mask-input';
import { MaskTextInput } from "../../components/MaskTextInput";
import { useRegisterTransactionScreenViewModel } from "./useRegisterTransactionScreenViewModel";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from "../../navigation/MainStackNavigation";


const schema = yup
  .object({
    what: yup.string().required(),
    how_much: yup.string().required(),
    when: yup.string().required(),
    where: yup.string().required(),
    as: yup.string().required(),
    type: yup.string().required()
  })
  .required()


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

type Props = NativeStackScreenProps<MainStackParamList, 'register'>;

export const RegisterTransactionScreenView = ({route}: Props) => {

  const {datePicker, onSubmit} = useRegisterTransactionScreenViewModel();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TransactionForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      when: datePicker.getDate().format('DD/MM/Y'),
      type: route?.params?.type || ''
    }
  });

  datePicker.subscribeHandlerChange((date)=>{
    setValue("when", date.format('DD/MM/Y'));
  });

  const handleOnPressWhen = () => {
    datePicker.showDatepicker();
  }

  const title = route?.params?.type === "input" ? 'Input Register' : 'Output Register';

  return (
    <ScreenView>
      <Title>{title}</Title>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <FiledTextInput
            label="What" 
            placeholder="What"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="what"
      />
      {errors.what && <ErrorMsg>{errors.what.message}</ErrorMsg>}
      <Controller
        control={control}
        render={({ field: {value, onChange} }) => (
          <MaskTextInput
            label="How Much"
            onChangeText={onChange}
            value={value}
            mask={Masks.BRL_CURRENCY}
            keyboardType="numeric"
          />
        )}
        name="how_much"
      />
      {errors.how_much && <ErrorMsg>{errors.how_much.message}</ErrorMsg>}
      <Controller
        control={control}
        render={({ field: {value} }) => (
          <FiledTextInput
            label="When"
            placeholder="When"
            value={value}
            onPressIn={handleOnPressWhen}
            onFocus={() => Keyboard.dismiss()}
          />
        )}
        name="when"
      />
      {errors.when && <ErrorMsg>{errors.when.message}</ErrorMsg>}
      <Controller
        control={control}
        render={({ field: {value, onChange} }) => (
          <FiledTextInput
            label="Where"
            placeholder="Where"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="where"
      />
      {errors.where && <ErrorMsg>{errors.where.message}</ErrorMsg>}
      <Label style={{marginBottom: 20}}>As</Label>
      <Controller
        control={control}
        render={({ field: {value} }) => (
          <AreaChipsView>
            {paymentTypes.map(({type, icon}) => (
              <Chip
                key={type}
                selected={value == type}
                icon={icon}
                onPress={() => setValue("as", type)}
                style={styles.chip}
              >
                {type}
              </Chip>
            ))}
          </AreaChipsView>
        )}
        name="as"
      />
      {errors.as && <ErrorMsg>{errors.as.message}</ErrorMsg>}
      <OutlinedButton label="Salvar" onPress={handleSubmit(onSubmit)}/>
      <TextButton label="Cancelar"/>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginRight: 10,
    marginBottom: 10
  }
});

const ScreenView =  styled.View`
  flex: 1;
  background-color: white;
  padding: 40px;
`;

const Title = styled.Text`
  color: ${Color.Black};
  font-size: ${Tipography.Title.Large.size}px;
  font-weight: ${Tipography.Title.Large.weight};
`

const AreaChipsView =  styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Label = styled.Text`
  font-size: ${Tipography.Label.Large.size}px;
  margin-top: 20px;
`;

const ErrorMsg = styled.Text`
  font-size: ${Tipography.Label.Small.size}px;
  margin-top: -10px;
  color: ${Color.Error};
`;

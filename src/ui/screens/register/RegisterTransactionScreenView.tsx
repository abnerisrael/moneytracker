import React, { useState } from "react";
import styled from 'styled-components/native';
import { As } from "../../../data/interfaces/transaction.i";
import { FontAwesomeIconsName } from "../../components/IconsName";
import { Chip } from "../../components/Chips";
import { StyleSheet } from "react-native";
import Tipography from "../../styles/tipography";
import { FiledTextInput } from "../../components/FiledTextInput";
import { TextButton } from "../../components/TextButton";
import { OutlinedButton } from "../../components/OutlinedButton";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { Color } from "../../styles/color";
import MaskInput, { Masks } from 'react-native-mask-input';
import { MaskTextInput } from "../../components/MaskTextInput";


type FormTransaction = {
  what: string;
  howMuch: string;
  when: string;
  where: string;
  as: string;
}

const schema = yup
  .object({
    what: yup.string().required(),
    howMuch: yup.string().required(),
    when: yup.string().required(),
    where: yup.string().required(),
    as: yup.string().required(),
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

export const RegisterTransactionScreenView = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormTransaction>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <ScreenView>
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
        name="howMuch"
      />
      {errors.howMuch && <ErrorMsg>{errors.howMuch.message}</ErrorMsg>}
      <Controller
        control={control}
        render={({ field: {value, onChange} }) => (
          <FiledTextInput
            label="When"
            placeholder="When"
            onChangeText={onChange}
            value={value}
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

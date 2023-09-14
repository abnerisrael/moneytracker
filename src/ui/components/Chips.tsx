import React from "react";
import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesomeIconsName } from "./IconsName";

type ChipProps = {
    icon?: FontAwesomeIconsName,
    onPress: () => void,
    children: React.ReactNode,
    selected?: boolean,
    style?: Object,
}

/**
 * How to use:
 * ```ts
 * <Chip selected icon="money" onPress={() => {}}>Your Text</Chip>
 * ``` 
 * @param props
 * @returns 
 */
export const Chip = (props: ChipProps) => {
    return (
        <ChipView onPress={props.onPress} style={props.style}>
            {props.icon && (<IconView>
                <FontAwesome name={props.icon} size={20} color="#000" style={{alignSelf: 'center'}} />
            </IconView>)}
            <ChipLabel>{props.children}</ChipLabel>
            {props.selected && (<ChipSelectedIconView>
                <MaterialIcons name="check" size={20} color="#000" style={{alignSelf: 'center'}} />
            </ChipSelectedIconView>)}
        </ChipView>
    )
}

const ChipView = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 50px;
  background-color: #f0f0f0;
  justify-content: left;
  padding: 10px;
`;

const IconView = styled.View`
    margin-right: 10px;
`;

const ChipSelectedIconView = styled.View`
    margin-left: 5px;
`;

const ChipLabel = styled.Text``;

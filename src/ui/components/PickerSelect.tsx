import React from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export interface PickerSelectItemProps {
    label: string,
    value: string | number | undefined
}

type PickerSelectProps = {
    selectedValue: string | undefined,
    onValueChange: (itemValue: string, itemIndex: number) => void,
    items: PickerSelectItemProps[]
}

export const PickerSelect = ({selectedValue, onValueChange, items}: PickerSelectProps) => {
    return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={styles.picker}
        >
            <Picker.Item label="Nenhum" value="" style={styles.pickerItem} />
            {items.map((props) => <Picker.Item {...props} style={styles.pickerItem}  /> )}
        </Picker>
    );
};

const styles = StyleSheet.create({
    picker: {
        height: 100,
        width: '100%',
    },
});
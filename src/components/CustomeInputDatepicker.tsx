import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface IInputDate {
    label: string;
    placeholder: string;
    parentDateCallback: (((text: string) => void) & Function); // fonction callback, renvoi données du child au parent
    error: boolean;
}

// Gestion de la vue uniquement.
// Les tests logiques sur la date sont fait en amont, à l'appel du composant
const CustomInputDatepicker: React.FC<IInputDate> = ({label, placeholder, parentDateCallback, error}: IInputDate): JSX.Element => {

    // Password
    const [date, setDate] = useState<string | undefined>('');

    const padTo2Digits = (num: number): string => num.toString().padStart(2, '0');
    const formatDate = (date: Date): string => {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }

    // DATE PICKER
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);
    const handleConfirm = (date: Date): void => {
        setDate(formatDate(date));
        parentDateCallback(formatDate(date)); // transmet les données au parent
        hideDatePicker();
    };

    return (
        <>
            <TextInput
                // common
                label={label}
                style={styles.field}
                placeholder={placeholder}
                value={date}
                // date
                right={<TextInput.Icon name="calendar" onPress={showDatePicker} />}
                maxLength={10}
                editable={false}
                // actions
                error={error}
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    )
}

export default CustomInputDatepicker;

const styles = StyleSheet.create({
    field: {
        maxWidth: 500,
        marginVertical: 20,
        borderColor: 'lightblue',
    }
});
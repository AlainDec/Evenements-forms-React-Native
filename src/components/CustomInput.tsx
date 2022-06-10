import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

interface IInput {
    type: "email" | "password" | "text";
    label: string;
    placeholder: string;
    onChangeText: (((text: string) => void) & Function) | undefined; // recup depuis hover sur onChangeText
    value: string;
    error: boolean;
    onBlur: ()=>void;
}

// Gestion de la vue uniquement.
// Les tests logiques sur email et password sont fait en amont, à l'appel du composant
const InputComponent: React.FC<IInput> = ({type, label, placeholder, onChangeText, value, error, onBlur}: IInput): JSX.Element => {

    // Password
    const [isVisibleField, setIsVisibleField] = useState<boolean>(true);
    const toggleVisible = () => setIsVisibleField(!isVisibleField);
    const iconEye = <TextInput.Icon name={isVisibleField ? 'eye-off' : 'eye'} onPress={toggleVisible} />

    return (
        <TextInput
            // common
            label={label}
            style={styles.field}
            placeholder={placeholder}
            onChangeText={onChangeText}
            // email
            keyboardType={type === "email" ? "email-address" : "default"}
            // password
            secureTextEntry={type === "password" && isVisibleField}
            right={type === "password" && iconEye}
            // actions
            error={error}
            onBlur={onBlur}
        />
    )
}

export default InputComponent;

const styles = StyleSheet.create({
    field: {
        maxWidth: 500,
        marginVertical: 20,
        borderColor: 'lightblue',
    }
});
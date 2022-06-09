import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ButtonComponent from '../components/ButtonComponent';
import validator from 'validator';

const SignUp1Screen: React.FC<any> = ({ navigation }: any): JSX.Element => {

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [passwordConfirmField, setPasswordConfirmField] = useState('');
    const [isVisibleField, setIsVisibleField] = useState<boolean>(true);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const toggleVisible = () => setIsVisibleField(!isVisibleField);

    const iconEye = <TextInput.Icon name={isVisibleField ? 'eye-off' : 'eye'} onPress={toggleVisible} />

    const checkEmail = () => {
        if (!validator.isEmail(emailField)) {
            setIsEmailValid(false);
            return false;
        } 
        setIsEmailValid(true);
        return true;
    }
    const checkPassword = () => {
        if (passwordField !== passwordConfirmField ||
            passwordField.length < 8) {
            setIsPasswordValid(false);
            return false;
        } 
        setIsPasswordValid(true);
        return true;
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/login.jpg')} />
            <View style={styles.containerFields}>
                <TextInput
                    label="Email"
                    style={styles.field}
                    placeholder="Entrez votre email"
                    onChangeText={emailField => setEmailField(emailField)}
                    value={emailField}

                    error={!isEmailValid}
                    onBlur={checkEmail}
                />
                <TextInput
                    label="Mot de passe"
                    style={styles.field}
                    placeholder="Entrez votre mot de passe"
                    onChangeText={passwordField => setPasswordField(passwordField)}
                    value={passwordField}

                    secureTextEntry={isVisibleField}
                    right={iconEye}
                    error={!isPasswordValid}
                    onBlur={checkPassword}
                />
                <TextInput
                    label="Confirmation du mot de passe"
                    style={styles.field}
                    placeholder="Entrez votre mot de passe"
                    onChangeText={passwordConfirmField => setPasswordConfirmField(passwordConfirmField)}
                    value={passwordConfirmField}

                    secureTextEntry
                    right={iconEye}
                    error={!isPasswordValid}
                    onBlur={checkPassword}
                />
                <View style={styles.containerButtons}>
                    <ButtonComponent
                        title="Suivant"
                        formValid={isEmailValid && isPasswordValid}
                        nav={() => navigation.navigate('SignUp2')} />
                </View>
            </View>
        </View>
    )
}

export default SignUp1Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
    },
    containerFields: {
        justifyContent: 'space-between',
    },
    containerField: {
        alignItems: 'flex-start',
    },
    field: {
        maxWidth: 500,
        marginVertical: 20,
        borderColor: 'lightblue',
    },
    containerButtons: {
        paddingVertical: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textLink: {
        color: 'blue',
        marginTop: 5,
    }
});
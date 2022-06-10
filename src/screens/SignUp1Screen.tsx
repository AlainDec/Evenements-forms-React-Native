import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import validator from 'validator';

const SignUp1Screen: React.FC<any> = ({ navigation }: any): JSX.Element => {

    const [emailField, setEmailField] = useState<string>('');
    const [passwordField, setPasswordField] = useState<string>('');
    const [passwordConfirmField, setPasswordConfirmField] = useState<string>('');
    const [isVisibleField, setIsVisibleField] = useState<boolean>(true);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

    const toggleVisible = () => setIsVisibleField(!isVisibleField);

    const iconEye = <TextInput.Icon name={isVisibleField ? 'eye-off' : 'eye'} onPress={toggleVisible} />

    const checkEmail = (): boolean => {
        if (!validator.isEmail(emailField)) {
            setIsEmailValid(false);
            return false;
        } 
        setIsEmailValid(true);
        return true;
    }
    const checkPassword = (): boolean => {
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
                <CustomInput
                    type="email"
                    label="Email"
                    placeholder="Entrez votre email"
                    onChangeText={(emailField:string) => setEmailField(emailField)}
                    value={emailField}
                    error={!isEmailValid}
                    onBlur={() => checkEmail()}
                />
                <CustomInput
                    type="password"
                    label="Mot de passe"
                    placeholder="placeholder!"
                    onChangeText={passwordField => setPasswordField(passwordField)}
                    value={passwordField}
                    error={!isPasswordValid}
                    onBlur={() => checkPassword()}
                />
                <CustomInput
                    type="password"
                    label="Confirmation du mot de passe"
                    placeholder="Entrez votre mot de passe"
                    onChangeText={passwordConfirmField => setPasswordConfirmField(passwordConfirmField)}
                    value={passwordConfirmField}
                    error={!isPasswordValid}
                    onBlur={() => checkPassword()}
                />
                <View style={styles.containerButtons}>
                    <CustomButton
                        title="Suivant"
                        formValid={isEmailValid && isPasswordValid}
                        nav={() => navigation.navigate('SignUp2', {
                            email: emailField,
                            password: passwordField
                        })} />
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
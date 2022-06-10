import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import validator from 'validator';

const SignInScreen: React.FC<any> = ({ navigation }: any): JSX.Element => {

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [isVisibleField, setIsVisibleField] = useState<boolean>(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const toggleVisible = () => setIsVisibleField(!isVisibleField);

    const iconEye = <TextInput.Icon name={isVisibleField ? 'eye-off' : 'eye'} onPress={toggleVisible} />

    const checkValue = () => {
        if (!validator.isEmail(emailField)) {
            setIsFormValid(false);
            console.log("isFormValid = " + isFormValid);
            return false;
        } 
        setIsFormValid(true);
        console.log("isFormValid = " + isFormValid);
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

                    error={false}
                    onBlur={() => {}}
                />
                <TextInput
                    label="Mot de passe"
                    style={styles.field}
                    placeholder="Entrez votre mot de passe"
                    onChangeText={passwordField => setPasswordField(passwordField)}
                    value={passwordField}

                    secureTextEntry={isVisibleField}
                    right={iconEye}
                    error={false}
                    onBlur={() => {}}
                />
                <View style={styles.containerButtons}>
                    <CustomButton
                        title="Se Connecter"
                        formValid={true}
                        nav={() => {}}
                    />
                </View>
            </View>
            <View style={styles.containerFooterText}>
                <Text style={styles.text}>Pas encore inscrit ?</Text>
                <Pressable onPress={() => navigation.navigate('SignUp1')}>
                    <Text style={styles.textLink}>Créer un compte</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default SignInScreen;

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
    containerFooterText: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        marginLeft: 10,
        color: 'blue',
    }
});
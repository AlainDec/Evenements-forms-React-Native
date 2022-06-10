import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CustomInputDatepicker from '../components/CustomeInputDatepicker';
import CustomInputSelect from '../components/CustomInputSelect';
import DropDown from "react-native-paper-dropdown";
import validator from 'validator';

const SignUp2Screen: React.FC<any> = ({ navigation }: any): JSX.Element => {

    const [civility, setCivility] = useState<string>('');
    const [firstnameField, setFirstnameField] = useState<string>('');
    const [lastnameField, setLastnameField] = useState<string>('');
    const [dateField, setDateField] = useState<string | undefined>('');
    const [isFirstnameValid, setIsFirstnameValid] = useState<boolean>(false);
    const [isLastnameValid, setIsLastnameValid] = useState<boolean>(false);
    const [isDateValid, setIsDateValid] = useState<boolean>(false);
    const [isCivilityValid, setIsCivilityValid] = useState<boolean>(false);

    // NOM / PRENOM
    const checkFirstname = (): boolean => {
        if (validator.isEmpty(firstnameField)) {
            setIsFirstnameValid(false);
            return false;
        } 
        setIsFirstnameValid(true);
        return true;
    }
    
    const checkLastname = (): boolean => {
        if (validator.isEmpty(lastnameField)) {
            setIsLastnameValid(false);
            return false;
        } 
        setIsLastnameValid(true);
        return true;
    }

    // CIVILITES
    const selectCallback = (childSelect: any) => {
        console.log("callback child gender  " + childSelect);
        setCivility(childSelect);
        checkCivility();
    }
    const checkCivility = (): boolean => {
        if (civility === "") {
            setIsCivilityValid(false);
            return false;
        }
        setIsCivilityValid(true);
        return true;
    }

    // DATES - récupération données enfant
    const dateCallback = (childDate: any) => {
        console.log("callback child date  " + childDate);
        setDateField(childDate);
        checkDate();
    }
    const checkDate = (): boolean => {
        console.log("checkdate");
        if (dateField === "") {
            setIsDateValid(false);
            return false;
        }
        setIsDateValid(true);
        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerFields}>
                <CustomInputSelect
                    label={"Civilité"}
                    placeholder="Choisissez votre civilité"
                    parentSelectCallback={selectCallback}
                    error={!isDateValid}
                />
                <CustomInput
                    type="text"
                    label="Prénom"
                    placeholder="Entrez votre prénom"
                    onChangeText={(firstnameField:string) => setFirstnameField(firstnameField)}
                    value={firstnameField}
                    error={!isFirstnameValid}
                    onBlur={() => checkFirstname()}
                />
                <CustomInput
                    type="text"
                    label="Nom"
                    placeholder="Entrez votre nom"
                    onChangeText={(lastnameField:string) => setLastnameField(lastnameField)}
                    value={lastnameField}
                    error={!isLastnameValid}
                    onBlur={() => checkLastname()}
                />
                <CustomInputDatepicker
                    label="Date de naissance"
                    placeholder="Entrez votre date de naissance"
                    parentDateCallback={dateCallback}
                    error={!isDateValid}
                />
                <View style={styles.containerButtons}>
                    {/* supprime toute la pile de navigation, donc plus de bouton back */}
                    <CustomButton
                        title="Terminé"
                        formValid={isFirstnameValid && isLastnameValid && isDateValid && isCivilityValid}
                        nav={() => navigation.reset({
                            index: 0,
                            routes: [{ name: 'SignUpSuccess' }],
                        })} 
                    />
                </View>
            </View>
        </View>
    )
}

export default SignUp2Screen;

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
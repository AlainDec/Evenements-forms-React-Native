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
import { SignUp2Props } from '../types/TRoutes';

const SignUp2Screen: React.FC<SignUp2Props> = ({ navigation, route }: SignUp2Props): JSX.Element => {

    console.log(route.params.email);
    console.log(route.params.password);

    const [civility, setCivility] = useState<string>('');
    const [firstnameField, setFirstnameField] = useState<string>('');
    const [lastnameField, setLastnameField] = useState<string>('');
    const [dateField, setDateField] = useState<string>('');
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
        checkCivility(childSelect);
    }
    const checkCivility = (childSelect: any): boolean => {
        if (childSelect === "") {
            setIsCivilityValid(false);
            return false;
        }
        setIsCivilityValid(true);
        return true;
    }

    // DATES - récupération données enfant
    const dateCallback = (childDate: string) => {
        setDateField(childDate);
        console.log("dateField = " + childDate)
        // Il faut bien passer en paramètre le childDate
        // car si dans la fonction checkDate, je teste dateField
        // qui est setté par setDateField(), ca ne sera PAS à jour
        // car il faut qu'il finisse de lire toute la méthode avant de rafraichir le state
        // et relire le composant !
        checkDate(childDate);
    }
    const checkDate = (childDate: string): boolean => {
        if (childDate === "") {
            setIsDateValid(false);
            return false;
        }
        console.log("checkdate setIsDateValid = true");
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
                            routes: [
                                {
                                    name: 'SignUpSuccess',
                                    params: {
                                        email: route.params.email,
                                        password: route.params.password,
                                        civility: civility,
                                        firstname: firstnameField,
                                        lastname: lastnameField,
                                        dateOfBirth: dateField,
                                    }
                                }
                            ],
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
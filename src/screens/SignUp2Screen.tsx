import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CustomInputDatepicker from '../components/CustomeInputDatepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDown from "react-native-paper-dropdown";
import validator from 'validator';

const SignUp2Screen: React.FC<any> = ({ navigation }: any): JSX.Element => {

    const [civilite, setCivilite] = useState<string>('');
    const [firstnameField, setFirstnameField] = useState<string>('');
    const [lastnameField, setLastnameField] = useState<string>('');
    const [isFirstnameValid, setIsFirstnameValid] = useState<boolean>(false);
    const [isLastnameValid, setIsLastnameValid] = useState<boolean>(false);
    const [dateField, setDateField] = useState<string | undefined>('');

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
        if (validator.isEmpty(firstnameField)) {
            setIsLastnameValid(false);
            return false;
        } 
        setIsLastnameValid(true);
        return true;
    }

    // CIVILITES
    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState<string>("");
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const genderList = [
        {
          label: "Homme",
          value: "male",
        },
        {
          label: "Femme",
          value: "female",
        },
        {
          label: "Autre",
          value: "others",
        },
      ];

    // DATES - récupération données enfant
    const dateCallback = (childDate: any) => {
        setDateField(childDate);
        console.log("date = " + childDate);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerFields}>
                <DropDown
                    label={"Civilité"}
                    mode={"outlined"}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={gender}
                    setValue={setGender}
                    list={genderList}
                    placeholder="Choisissez votre civilité"
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
                    onChangeText={(dateField:string) => setDateField(dateField)}
                    value={firstnameField}

                    parentDateCallback={dateCallback}
                    error={false}
                    onBlur={() => { }}
                />
                <View style={styles.containerButtons}>
                    {/* supprime toute la pile de navigation, donc plus de bouton back */}
                    <CustomButton
                        title="Terminé"
                        formValid={isFirstnameValid && isLastnameValid}
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
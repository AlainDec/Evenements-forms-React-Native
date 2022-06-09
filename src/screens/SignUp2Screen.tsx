import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import ButtonComponent from '../components/ButtonComponent';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDown from "react-native-paper-dropdown";

const SignUp2Screen: React.FC<any> = ({ navigation }: any): JSX.Element => {

    const [civilite, setCivilite] = useState('test');

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

    // DATES
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
        hideDatePicker();
    };

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
                <TextInput
                    label="Prénom"
                    style={styles.field}
                    placeholder="Entrez votre prénom"
                    onChangeText={() => { }}
                    value={''}

                    error={false}
                    onBlur={() => { }}
                />
                <TextInput
                    label="Nom"
                    style={styles.field}
                    placeholder="Entrez votre nom"
                    onChangeText={() => { }}
                    value={''}

                    error={false}
                    onBlur={() => { }}
                />
                <TextInput
                    label="Date de naissance"
                    style={styles.field}
                    placeholder="Entrez votre date de naissance"
                    value={date}

                    right={<TextInput.Icon name="calendar" onPress={showDatePicker} />}
                    maxLength={10}
                    editable={false}
                    error={false}
                    onBlur={() => { }}
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View style={styles.containerButtons}>
                    {/* supprime toute la pile de navigation, donc plus de bouton back */}
                    <ButtonComponent
                        title="Terminé"
                        formValid={true}
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
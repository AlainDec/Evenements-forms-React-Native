import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";

interface IInputSelect {
  label: string;
  placeholder: string;
  parentSelectCallback: (((text: string) => void) & Function); // fonction callback, renvoi données du child au parent
  error: boolean;
}

// Gestion de la vue uniquement.
// Les tests logiques sur l'input select sont fait en amont, à l'appel du composant
const CustomInputSelect: React.FC<IInputSelect> = ({ label, placeholder, parentSelectCallback, error }: IInputSelect): JSX.Element => {

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

  const handleConfirm = (value: string): void => {
    setGender(value);
    parentSelectCallback(value); // transmet les données au parent
  };

  return (
    <DropDown
      label={label}
      placeholder={placeholder}
      mode={"flat"}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={gender}
      setValue={(text)=>handleConfirm(text)}
      list={genderList}
    />
  )
}

export default CustomInputSelect;

const styles = StyleSheet.create({
  field: {
    maxWidth: 500,
    marginVertical: 20,
    borderColor: 'lightblue',
  }
});
import { Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

interface IButton {
    title: string;
    formValid?: boolean;
    nav: () => void;
}

const ButtonComponent: React.FC<IButton> = ({ title, formValid, nav }: IButton): JSX.Element => {
    const activateButton = formValid || formValid === undefined;
    return (
        <Pressable
            style={[styles.button, activateButton  ? styles.buttonValid : styles.buttonInvalid]}
            onPress={activateButton ? nav : ()=>{}}>
            <Text style={activateButton  ? styles.textButtonValid : styles.textButtonInvalid}>{title}</Text>
        </Pressable>
    );
}

export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
    },
    buttonValid: {
        backgroundColor:'lightblue',
    },
    buttonInvalid: {
        backgroundColor:'transparent',
        borderWidth: 1,
        borderColor: 'lightblue',
    },
    textButtonValid: {
        color: '#fff',
        fontSize: 18,
    },
    textButtonInvalid: {
        color: '#666',
        fontSize: 18,
    }
});
import { NavigationHelpersContext } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const SignUpSuccessScreen: React.FC<any> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/success.jpg')} />
            <Text>Votre compte a été créé avec succès</Text>
            <View style={styles.containerButtons}>
                {/* supprime toute la pile de navigation, donc plus de bouton back */}
                <ButtonComponent
                    title="Se Connecter"
                    nav={() => navigation.reset({
                        index: 0,
                        routes: [{name: 'SignIn'}],
                    })}
                />
            </View>
        </View>
    )
}

export default SignUpSuccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerButtons: {
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        backgroundColor:'darkred',
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
    }
});
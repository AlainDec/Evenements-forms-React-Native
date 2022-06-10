import { Text, View, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import { SignUpSuccessProps } from '../types/TRoutes';

const SignUpSuccessScreen: React.FC<SignUpSuccessProps> = ({ navigation, route }: SignUpSuccessProps): JSX.Element => {
    console.log(route);
    console.log(route.params.email);
    console.log(route.params.password);
    console.log(route.params.civility);
    console.log(route.params.firstname);
    console.log(route.params.lastname);
    console.log(route.params.dateOfBirth);
    return (
        <View style={styles.container}>
            <Image source={require('../assets/success.jpg')} />
            <Text>Votre compte a été créé avec succès</Text>
            <View style={styles.containerButtons}>
                {/* supprime toute la pile de navigation, donc plus de bouton back */}
                <CustomButton
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
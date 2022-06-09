import { NavigationHelpersContext } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const HomeScreen: React.FC<any> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/pirates-corsaires.png')} />
            <View style={styles.containerButtons}>
                <ButtonComponent
                    title="Se Connecter"
                    nav={() => navigation.navigate('SignIn')}
                />
                <ButtonComponent
                    title="S'inscrire"
                    nav={() => navigation.navigate('SignUp1')}
                />
            </View>
        </View>
    )
}

export default HomeScreen;

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
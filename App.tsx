import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper';
import {
  HomeScreen,
  SignInScreen,
  SignUp1Screen,
  SignUp2Screen,
  SignUpSuccessScreen
} from './src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // <Stack.Navigator initialRouteName="HomeScreen">
  return (
    <Provider> 
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp1" component={SignUp1Screen} />
          <Stack.Screen name="SignUp2" component={SignUp2Screen} />
          <Stack.Screen name="SignUpSuccess" component={SignUpSuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider> 
  );
}

/*
type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Registration: undefined;
  NextRegistration: undefined;
  AccountCreated: undefined;
  AppContent: undefined;
};
// Stack
const Stack = createNativeStackNavigator<RootStackParamList>();
// component
const SplashScreen = ({navigation}:NativeStackScreenProps<RootStackParamList, 'Splash'>) => {
  return (
    <View style={styles.container}>
        <Image source={require('./assets/Creation-logo-paris.png')} style={{ width: 150, height: 150, marginBottom: 50, alignSelf: 'center' }}/>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ width: 300, height: 50, backgroundColor: 'blue', borderRadius: 25, marginBottom: 20, alignSelf: 'center'  }}>
          <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontSize: 20, color: 'white' }}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={{ width: 300, height: 50, borderColor: 'blue', borderRadius: 25, borderWidth: 2, alignSelf: 'center'  }}>
          <Text style={{  textAlign: 'center', textAlignVertical: 'center', height: '100%', fontSize: 20, color: 'blue'  }}>S'inscrire</Text>
        </TouchableOpacity>
    </View>
  );
}
*/
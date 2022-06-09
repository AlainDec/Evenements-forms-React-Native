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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider> 
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
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

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

interface IFieldsSignUp1 {
    email: string,
    password: string,
}

interface IFieldsSignUp2 {
    email: string,
    password: string,
    civility: string,
    firstname: string,
    lastname: string,
    dateOfBirth: string
}

type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
    SignUp1: undefined;
    SignUp2: IFieldsSignUp1;
    SignUpSuccess: IFieldsSignUp2;
};

type SignUp2Props = NativeStackScreenProps<RootStackParamList, 'SignUp2'>;
type SignUpSuccessProps = NativeStackScreenProps<RootStackParamList, 'SignUpSuccess'>;

export { SignUpSuccessProps, SignUp2Props };
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { OnboardingScreen } from '@/screens/Onboarding';
import { SignIn } from '@/screens/SignIn';
import { PersonalData } from '@/screens/SignUp/PersonalData';
import { PhoneNumber } from '@/screens/SignUp/PhoneNumber';
import { SecurityPassword } from '@/screens/SignUp/SecurityPassword';
import { Terms } from '@/screens/SignUp/Terms';

type AuthRoutesProps = {
  signInRoute: undefined;
  signUpRoute: undefined;
};

type SignInRoutesProps = {
  onboarding: undefined;
  signIn: undefined;
};

type SignUpRoutesProps = {
  personalData: undefined;
  phoneNumber: undefined;
  securityPassword: undefined;
  terms: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutesProps>;

export type SignInNavigatorRoutesProps =
  NativeStackNavigationProp<SignInRoutesProps>;

export type SignUpNavigatorRoutesProps =
  NativeStackNavigationProp<SignUpRoutesProps>;

const AuthStack = createNativeStackNavigator<AuthRoutesProps>();
const SignInStack = createNativeStackNavigator<SignInRoutesProps>();
const SignUpStack = createNativeStackNavigator<SignUpRoutesProps>();

function SignInStackRoute() {
  return (
    <SignInStack.Navigator screenOptions={{ headerShown: false }}>
      <SignInStack.Screen name="onboarding" component={OnboardingScreen} />
      <SignInStack.Screen name="signIn" component={SignIn} />
    </SignInStack.Navigator>
  );
}

function SignUpStackRoute() {
  return (
    <SignUpStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpStack.Screen name="phoneNumber" component={PhoneNumber} />
      <SignUpStack.Screen name="personalData" component={PersonalData} />
      <SignUpStack.Screen
        name="securityPassword"
        component={SecurityPassword}
      />
      <SignUpStack.Screen name="terms" component={Terms} />
    </SignUpStack.Navigator>
  );
}

export function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="signInRoute" component={SignInStackRoute} />
      <AuthStack.Screen name="signUpRoute" component={SignUpStackRoute} />
    </AuthStack.Navigator>
  );
}

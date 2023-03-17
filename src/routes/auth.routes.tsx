import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { LoginScreen } from '@/screens/Login';
import { OnboardingScreen } from '@/screens/Onboarding';

type AuthRoutesProps = {
  onboarding: undefined;
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="onboarding" component={OnboardingScreen} />
      <Screen name="signIn" component={LoginScreen} />
      {/* TODO: render signUp component */}
      <Screen name="signUp" component={StubSignUp} />
    </Navigator>
  );
}

// TODO: remove this when singUp component is real
const StubSignUp = () => {
  return null;
};

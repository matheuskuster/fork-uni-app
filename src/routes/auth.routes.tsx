import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { useStorage } from '@/hooks/useStorage';
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
  const storage = useStorage();

  const [loading, setLoading] = useState(true);
  const [isFirstAccess, setIsFirstAccess] = useState(true);

  const fetchFirstTimeAccessFromStorage = async () => {
    const data = await storage.firstAccess.isFirstAccess();
    setIsFirstAccess(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  useEffect(() => {
    fetchFirstTimeAccessFromStorage();
  }, []);

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

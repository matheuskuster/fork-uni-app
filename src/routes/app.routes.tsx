import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { PaymentRoutes } from './payment.routes';
import { ProfileRoutes } from './profile.routes';

import { Home } from '@/screens/Home';
import { Notifications } from '@/screens/Notifications';

type AppRoutesProps = {
  home: undefined;
  notifications: undefined;
  profile: undefined;
  paymentRoute:
    | { screen: 'history' | 'method' | 'revision' | 'creditCard' }
    | undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>;

const AppStack = createNativeStackNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <AppStack.Screen name="home" component={Home} />
      <AppStack.Screen name="notifications" component={Notifications} />
      <AppStack.Screen name="profile" component={ProfileRoutes} />
      <AppStack.Screen name="paymentRoute" component={PaymentRoutes} />
    </AppStack.Navigator>
  );
}

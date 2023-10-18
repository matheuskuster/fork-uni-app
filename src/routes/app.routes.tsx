import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { PaymentStackRoute } from './payment.routes';
import { ProfileRoutes } from './profile.routes';

import { Home } from '@/screens/Home';
import { Notifications } from '@/screens/Notifications';

type AppMainRoutesProps = {
  home: undefined;
  notifications: undefined;
  profile: undefined;
};

type AppRoutesProps = {
  AppRoute: undefined;
  PaymentRoute: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>;
export type AppMainNavigatorRoutesProps =
  NativeStackNavigationProp<AppMainRoutesProps>;

const AppMainStack = createNativeStackNavigator<AppMainRoutesProps>();
const AppStack = createNativeStackNavigator<AppRoutesProps>();

export function AppStackRoute() {
  return (
    <AppMainStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <AppMainStack.Screen name="home" component={Home} />
      <AppMainStack.Screen name="notifications" component={Notifications} />
      <AppMainStack.Screen name="profile" component={ProfileRoutes} />
    </AppMainStack.Navigator>
  );
}

export function AppRoutes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="AppRoute" component={AppStackRoute} />
      <AppStack.Screen name="PaymentRoute" component={PaymentStackRoute} />
    </AppStack.Navigator>
  );
}

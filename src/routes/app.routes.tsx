import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Home } from '@/screens/Home';
import { Notifications } from '@/screens/Notifications';
import { Profile } from '@/screens/Profile';

type AppRoutesProps = {
  home: undefined;
  notifications: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="notifications" component={Notifications} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { ProfileList } from '@/screens/Profile';
import { DeleteAccount } from '@/screens/Profile/DeleteAccount';
import { MyPersonalData } from '@/screens/Profile/MyData';

type ProfileRoutesProps = {
  list: undefined;
  myData: undefined;
  faq: undefined;
  config: undefined;
  deleteAccount: undefined;
};

export type ProfileNavigatorRoutesProps =
  NativeStackNavigationProp<ProfileRoutesProps>;

const ProfileStack = createNativeStackNavigator<ProfileRoutesProps>();

export function ProfileRoutes() {
  return (
    <ProfileStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      initialRouteName="list"
    >
      <ProfileStack.Screen name="list" component={ProfileList} />
      <ProfileStack.Screen name="myData" component={MyPersonalData} />
      <ProfileStack.Screen name="deleteAccount" component={DeleteAccount} />
      {/* <ProfileStack.Screen name="faq" component={() => {}} /> */}
      {/* <ProfileStack.Screen name="config" component={() => {}} /> */}
    </ProfileStack.Navigator>
  );
}

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Address } from '@/screens/Enrollment/Address';
import { Institution } from '@/screens/Enrollment/Institution';
import { Price } from '@/screens/Enrollment/Price';

type EnrollmentRoutesProps = {
  institution: undefined;
  price: undefined;
  address: undefined;
};

export type EnrollmentNavigatorRoutesProps =
  NativeStackNavigationProp<EnrollmentRoutesProps>;

const { Navigator, Screen } =
  createNativeStackNavigator<EnrollmentRoutesProps>();

export function EnrollmentRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="institution" component={Institution} />
      <Screen name="price" component={Price} />
      <Screen name="address" component={Address} />
    </Navigator>
  );
}

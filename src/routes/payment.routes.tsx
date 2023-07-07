import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { History } from '@/screens/Payment/History';
import { Method } from '@/screens/Payment/Method';
import { Revision } from '@/screens/Payment/Revision';

type PaymentRoutesProps = {
  history: undefined;
  method: undefined;
  revision: undefined;
};

export type PaymentNavigatorRoutesProps =
  NativeStackNavigationProp<PaymentRoutesProps>;

const PaymentStack = createNativeStackNavigator<PaymentRoutesProps>();

export function PaymentStackRoute() {
  return (
    <PaymentStack.Navigator screenOptions={{ headerShown: false }}>
      <PaymentStack.Screen name="revision" component={Revision} />
      <PaymentStack.Screen name="method" component={Method} />
      <PaymentStack.Screen name="history" component={History} />
    </PaymentStack.Navigator>
  );
}

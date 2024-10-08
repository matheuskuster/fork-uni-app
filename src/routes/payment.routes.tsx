import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { CreditCard } from '@/screens/Payment/CreditCard';
import { History } from '@/screens/Payment/History';
import { Method } from '@/screens/Payment/Method';
import { PaymentConfirmation } from '@/screens/Payment/PaymentConfirmation';
import { Revision } from '@/screens/Payment/Revision';

type PaymentRoutesProps = {
  history: undefined;
  method: undefined;
  revision: undefined;
  confirmation: undefined;

  creditCard: undefined;
};

export type PaymentNavigatorRoutesProps =
  NativeStackNavigationProp<PaymentRoutesProps>;

const PaymentStack = createNativeStackNavigator<PaymentRoutesProps>();

export function PaymentRoutes() {
  return (
    <PaymentStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      initialRouteName="history"
    >
      <PaymentStack.Screen name="revision" component={Revision} />
      <PaymentStack.Screen
        name="confirmation"
        component={PaymentConfirmation}
      />
      <PaymentStack.Screen name="method" component={Method} />
      <PaymentStack.Screen name="history" component={History} />
      <PaymentStack.Screen name="creditCard" component={CreditCard} />
    </PaymentStack.Navigator>
  );
}

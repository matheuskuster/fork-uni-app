import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { EnrollmentRoutes } from './enrollment.routes';

import { useSelector } from '@/app/hooks';

export function Routes() {
  const { isAuthenticated, isEnrolled } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    );
  }

  if (!isEnrolled) {
    return (
      <NavigationContainer>
        <EnrollmentRoutes />
      </NavigationContainer>
    );
  }

  if (isAuthenticated && isEnrolled) {
    return <NavigationContainer>{/* APP ROUTES */}</NavigationContainer>;
  }

  return null;
}

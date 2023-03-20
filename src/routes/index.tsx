import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { EnrollmentRoutes } from './enrollment.routes';

import { useAuth } from '@/contexts/AuthContext';

export function Routes() {
  const { isAuthenticated } = useAuth();
  const { isEnrolled } = useAuth();

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

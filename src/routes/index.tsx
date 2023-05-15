import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { EnrollmentRoutes } from './enrollment.routes';

import { useDispatch, useSelector } from '@/app/hooks';
import { getUserByToken } from '@/features/auth/authActions';

export function Routes() {
  const dispatch = useDispatch();
  const { isAuthenticated, isEnrolled, token, isLoading } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (token) {
      dispatch(getUserByToken());
    }
  }, []);

  if (!isAuthenticated && !isLoading) {
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
    return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );
  }

  return null;
}

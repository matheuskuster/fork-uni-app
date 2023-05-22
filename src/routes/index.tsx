import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { EnrollmentRoutes } from './enrollment.routes';

import { useDispatch, useSelector } from '@/app/hooks';
import { getMe } from '@/features/auth/authActions';

export function Routes() {
  const dispatch = useDispatch();
  const { isAuthenticated, token, isLoading, user } = useSelector(
    (state) => state.auth,
  );
  const { isCreating } = useSelector((state) => state.student);

  useEffect(() => {
    if (token) {
      dispatch(getMe());
    }
  }, []);

  if (!isAuthenticated && !isLoading) {
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    );
  }

  if (isAuthenticated && !isCreating) {
    const isStudent = user?.roles.includes('student');

    if (isStudent) {
      return (
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      );
    }

    return (
      <NavigationContainer>
        <EnrollmentRoutes />
      </NavigationContainer>
    );
  }

  return null;
}

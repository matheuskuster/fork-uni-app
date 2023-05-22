import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { EnrollmentRoutes } from './enrollment.routes';

import { useDispatch, useSelector } from '@/app/hooks';
import { theme } from '@/theme';
import { getMe } from '@/features/auth/authActions';

export function Routes() {
  const dispatch = useDispatch();
  const { isAuthenticated, token, isLoading, user } = useSelector(
    (state) => state.auth,
  );
  const { isCreating } = useSelector((state) => state.student);

  const styles = {
    flex: 1,
    backgroundColor: theme.colors.background,
  };

  useEffect(() => {
    if (token) {
      dispatch(getMe());
    }
  }, []);

  if (!isAuthenticated && !isLoading) {
    return (
      <SafeAreaProvider style={styles}>
        <NavigationContainer>
          <AuthRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

  if (isAuthenticated && !isCreating) {
    const isStudent = user?.roles.includes('student');

    if (isStudent) {
      return (
        <SafeAreaProvider style={styles}>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </SafeAreaProvider>
      );
    }

    return (
      <SafeAreaProvider style={styles}>
        <NavigationContainer>
          <EnrollmentRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

  return null;
}

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { FontLoaderProvider } from './providers/FontLoaderProvider';
import { OnboardingScreen } from './screens/Onboarding';

import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontLoaderProvider>
        <OnboardingScreen />
        <StatusBar style="light" />
      </FontLoaderProvider>
    </ThemeProvider>
  );
}

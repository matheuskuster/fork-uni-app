import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Vou de Van</Text>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

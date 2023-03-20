import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './contexts/AuthContext';
import { FontLoaderProvider } from './providers/FontLoaderProvider';
import { Routes } from './routes';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontLoaderProvider>
        <AuthProvider>
          <Routes />
          <StatusBar style="light" />
        </AuthProvider>
      </FontLoaderProvider>
    </ThemeProvider>
  );
}

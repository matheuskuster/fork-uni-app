import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './app/store';
import { FontLoaderProvider } from './providers/FontLoaderProvider';
import { Routes } from './routes';
import { theme } from './theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FontLoaderProvider>
          <Provider store={store}>
            <Routes />
            <StatusBar style="light" />
          </Provider>
        </FontLoaderProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

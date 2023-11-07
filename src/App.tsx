import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from './app/store';
import { FontLoaderProvider } from './providers/FontLoaderProvider';
import { Routes } from './routes';
import { theme } from './theme';

const queryClient = new QueryClient();

export default function App() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FontLoaderProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Routes />
              <StatusBar style="light" />
            </PersistGate>
          </Provider>
        </FontLoaderProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './app/store';
import { FontLoaderProvider } from './providers/FontLoaderProvider';
import { Routes } from './routes';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontLoaderProvider>
        <Provider store={store}>
          <Routes />
          <StatusBar style="light" />
        </Provider>
      </FontLoaderProvider>
    </ThemeProvider>
  );
}

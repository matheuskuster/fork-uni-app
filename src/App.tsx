import { ThemeProvider } from 'styled-components';

import { FontLoaderProvider } from './providers/FontLoaderProvider';
import { LoginScreen } from './screen/Login';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontLoaderProvider>
        <LoginScreen />
      </FontLoaderProvider>
    </ThemeProvider>
  );
}

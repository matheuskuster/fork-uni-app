import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { ChatButton, NotificationsButton, ProfileButton } from './components';
import { FontLoaderProvider } from './providers/FontLoaderProvider';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontLoaderProvider>
        <SafeAreaView
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1, margin: 16 }}>
          <ChatButton />
          <ProfileButton />
          <NotificationsButton />
        </SafeAreaView>
      </FontLoaderProvider>
    </ThemeProvider>
  );
}

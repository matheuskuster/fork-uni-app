import 'styled-components';

import { theme } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    shadows: typeof theme.shadows;
    spacing: typeof theme.spacing;
    fonts: typeof theme.fonts;
    fontSizes: typeof theme.fontSizes;
    sizes: typeof theme.sizes;
    radii: typeof theme.radii;
  }
}

const colors = {
  black: '#000000',
  white: '#FFFFFF',

  gray: {
    50: '#F0F0F0',
    100: '#E1E1E1',
    150: '#D9D9D9',
    200: '#C4C4C4',
    250: '#BBBBBB',
    300: '#AFAFAF',
    400: '#8A8A8A',
    500: '#6D6D6D',
    600: '#505050',
    650: '#525252',
    700: '#333333',
    750: '#262626',
    800: '#181818',
    850: '#0F0F0F',
    900: '#000000',
  },

  green: {
    100: '#E1FFD9',
    200: '#DBFF9C',
    250: '#D7FE94',
    300: '#A1FF70',
    400: '#81FF3B',
    500: '#A1FF00',
    600: '#7FDB00',
    650: '#12BD17',
    700: '#5CA700',
    750: '#34A853',
    800: '#3A7300',
    900: '#193F00',
  },

  yellow: {
    100: '#FFF9D9',
    200: '#FFF59C',
    250: '#FFF094',
    300: '#FFEA70',
    400: '#FFE63B',
    500: '#FAFF00',
    600: '#DBDB00',
    700: '#A7A700',
    800: '#737300',
    900: '#3F3F00',
  },

  red: {
    100: '#FFD9D9',
    200: '#FF9C9C',
    250: '#FE9494',
    300: '#FF7070',
    400: '#FF3B3B',
    500: '#FF0000',
    550: '#C20F00',
    600: '#DB0000',
    700: '#A70000',
    800: '#730000',
    900: '#3F0000',
  },

  // brands
  pix: '#32BCAD',
  google: '#EA4335',
  apple: '#000000',

  // will be set later
  background: '',
  primary: '',
  input: '',
  'input.disabled': '',
  'input.icon': '',
  success: '',
  placeholder: '',
};

colors.background = colors.gray[850];
colors.primary = colors.green[500];
colors.input = colors.gray[750];
colors['input.disabled'] = colors.gray[650];
colors['input.icon'] = colors.gray[250];
colors.success = colors.green[650];
colors.placeholder = colors.gray[300];

export { colors };

const colors = {
  black: '#000000',
  white: '#FFFFFF',

  gray: {
    100: '#E1E1E1',
    150: '#D9D9D9',
    200: '#C4C4C4',
    300: '#AFAFAF',
    400: '#8A8A8A',
    500: '#6D6D6D',
    600: '#505050',
    650: '#525252',
    700: '#333333',
    750: '#262626',
    800: '#181818',
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
    800: '#3A7300',
    900: '#193F00',
  },

  red: {
    100: '#FFD9D9',
    200: '#FF9C9C',
    250: '#FE9494',
    300: '#FF7070',
    400: '#FF3B3B',
    500: '#FF0000',
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
  success: '',
  placeholder: '',
};

colors.background = colors.black;
colors.primary = colors.green[500];
colors.input = colors.gray[750];
colors['input.disabled'] = colors.gray[650];
colors.success = colors.green[650];
colors.placeholder = colors.gray[300];

export { colors };

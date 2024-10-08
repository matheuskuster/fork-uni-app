export default {
  expo: {
    name: 'Vou de Van Uni',
    slug: 'vou-de-van-uni',
    version: '1.0.7',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    backgroundColor: '#0F0F0F',
    owner: 'voudevan',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#000000',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'com.voudevan.voudevanuni',
    },
    android: {
      softwareKeyboardLayoutMode: 'pan',
      package: 'com.voudevan.voudevanuni',
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    extra: {
      eas: {
        projectId: '00afb4d0-2c9a-4573-878d-29c86db1ee13',
      },
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
    updates: {
      url: 'https://u.expo.dev/00afb4d0-2c9a-4573-878d-29c86db1ee13',
    },
    plugins: [
      [
        'expo-updates',
        {
          username: 'voudevan',
        },
      ],
    ],
  },
};

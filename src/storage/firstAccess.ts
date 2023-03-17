import AsyncStorage from '@react-native-async-storage/async-storage';

import { keys } from './config';

export const firstAccess = {
  get: async () => {
    const value = await AsyncStorage.getItem(keys.FIRST_ACCESS);
    if (value) return new Date(value);
    return null;
  },
  set: async (value: Date) => {
    await AsyncStorage.setItem(keys.FIRST_ACCESS, value.toString());
  },
  isFirstAccess: async () => {
    const value = await AsyncStorage.getItem(keys.FIRST_ACCESS);
    return !value;
  },
};

import AsyncStorage from '@react-native-async-storage/async-storage';

import { firstAccess } from './firstAccess';

type Storage = {
  firstAccess: typeof firstAccess;
  set: (key: string, value: string) => Promise<void>;
  get: (key: string) => Promise<string | null>;
};

export const storage: Storage = {
  firstAccess,
  get: async (key: string) => {
    return await AsyncStorage.getItem(key);
  },
  set: async (key: string, value: string) => {
    await AsyncStorage.setItem(key, value);
  },
};

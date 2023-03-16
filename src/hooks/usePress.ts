import { useMemo } from 'react';
import { Animated } from 'react-native';

interface Params {
  default?: number;
  to?: number;
}

const defaultParams: Required<Params> = {
  default: 1,
  to: 0.4,
};

export function usePress(params?: Params) {
  const paramsWithDefaults = { ...defaultParams, ...params };

  const animated = useMemo(() => new Animated.Value(1), []);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: paramsWithDefaults.to,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: paramsWithDefaults.default,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return {
    press: animated,
    fadeIn,
    fadeOut,
  };
}

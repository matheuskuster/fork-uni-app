import { Feather } from '@expo/vector-icons';
import { forwardRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Input, InputProps } from '@/components/Input';

interface SecretInputProps extends Omit<InputProps, 'rightIcon'> {}

export const SecretInput = forwardRef<TextInput, SecretInputProps>((props, ref) => {
  const [showSecret, setShowSecret] = useState(false);
  const theme = useTheme();

  const toggleSecret = () => {
    setShowSecret((prev) => !prev);
  };

  const EyeIcon = () => {
    return showSecret ? (
      <Feather name="eye-off" size={24} color={theme.colors['input.icon']} onPress={toggleSecret} />
    ) : (
      <Feather name="eye" size={24} color={theme.colors['input.icon']} onPress={toggleSecret} />
    );
  };

  return <Input secureTextEntry={!showSecret} rightIcon={<EyeIcon />} ref={ref} {...props} />;
});

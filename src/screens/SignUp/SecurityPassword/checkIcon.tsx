import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

interface CheckIconProps {
  isValid: boolean;
}

export function CheckIcon({ isValid }: CheckIconProps) {
  const theme = useTheme();

  return (
    <Feather
      name={isValid ? 'check' : 'x'}
      size={theme.spacing['3']}
      color={isValid ? theme.colors.green[750] : theme.colors.red[550]}
    />
  );
}

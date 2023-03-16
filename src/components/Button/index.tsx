import { PressableProps } from 'react-native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';

export interface ButtonProps extends PressableProps {
  children: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
}

export function Button({ children, rightIcon, disabled = false, ...props }: ButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });

  return (
    <S.ButtonContainer style={{ opacity: disabled ? 0.5 : press }} disabled={disabled}>
      <S.Button
        disabled={disabled}
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        withIcon={!!rightIcon}
        {...props}>
        <S.ButtonText>{children}</S.ButtonText>
        {rightIcon}
      </S.Button>
    </S.ButtonContainer>
  );
}

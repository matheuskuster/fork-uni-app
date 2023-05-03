import { PressableProps, ActivityIndicator } from 'react-native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';

export interface ButtonProps extends PressableProps {
  children: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export function Button({
  children,
  rightIcon,
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });
  const isDisabled = disabled || isLoading;

  return (
    <S.ButtonContainer
      style={{ opacity: isDisabled ? 0.5 : press }}
      disabled={isDisabled}
    >
      <S.Button
        disabled={isDisabled}
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        withIcon={!!rightIcon}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <S.ButtonText>{children}</S.ButtonText>
            {rightIcon}
          </>
        )}
      </S.Button>
    </S.ButtonContainer>
  );
}

import { PressableProps, ActivityIndicator } from 'react-native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';

export type ButtonVariant = 'primary' | 'danger' | 'greenish';

export interface ButtonProps extends PressableProps {
  children: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  description?: string;
  isLoading?: boolean;
  variant?: ButtonVariant;
}

export function Button({
  children,
  rightIcon,
  leftIcon,
  disabled = false,
  isLoading = false,
  description,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });
  const isDisabled = disabled || isLoading;

  const getIconType = () => {
    if (leftIcon && rightIcon) return 'all';
    if (leftIcon) return 'left';
    if (rightIcon) return 'right';
    return 'none';
  };

  return (
    <S.ButtonContainer
      style={{ opacity: isDisabled ? 0.5 : press }}
      variant={variant}
      disabled={isDisabled}
    >
      <S.Button
        disabled={isDisabled}
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        iconType={getIconType()}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {leftIcon && <S.LeftIconContainer>{leftIcon}</S.LeftIconContainer>}

            <S.ButtonContent>
              <S.ButtonText variant={variant}>{children}</S.ButtonText>

              {description && (
                <S.ButtonDescription variant={variant}>
                  {description}
                </S.ButtonDescription>
              )}
            </S.ButtonContent>

            {rightIcon}
          </>
        )}
      </S.Button>
    </S.ButtonContainer>
  );
}

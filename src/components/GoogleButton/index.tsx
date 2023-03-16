import { PressableProps, ViewStyle } from 'react-native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';
import { GoogleIcon } from '@/icons/GoogleIcon';

interface GoogleButtonProps extends PressableProps {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  disabled?: boolean;
}

export function GoogleButton({ children, disabled, containerStyle, ...props }: GoogleButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });

  return (
    <S.GoogleButtonContainer style={{ opacity: disabled ? 0.5 : press }} {...containerStyle}>
      <S.GoogleButton onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
        <GoogleIcon />
        <S.GoogleButtonText>{children}</S.GoogleButtonText>
        <S.Dumby />
      </S.GoogleButton>
    </S.GoogleButtonContainer>
  );
}

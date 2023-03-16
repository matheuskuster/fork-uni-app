import { AntDesign } from '@expo/vector-icons';
import { PressableProps, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';

interface BackButtonProps extends PressableProps {
  containerStyle?: ViewStyle;
}

export function BackButton({ disabled, containerStyle, ...props }: BackButtonProps) {
  const { colors } = useTheme();

  const { press, fadeIn, fadeOut } = usePress({ to: 0.5 });

  return (
    <S.BackButtonContainer style={{ opacity: disabled ? 0.5 : press, ...containerStyle }}>
      <S.BackButton onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
        <AntDesign name="arrowleft" size={24} color={colors.white} />
      </S.BackButton>
    </S.BackButtonContainer>
  );
}

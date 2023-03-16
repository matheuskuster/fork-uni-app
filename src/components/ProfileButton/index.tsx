import { PressableProps, ViewStyle } from 'react-native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';
import { ProfileIcon } from '@/icons/ProfileIcon';

interface ProfileButtonProps extends PressableProps {
  containerStyle?: ViewStyle;
}

export function ProfileButton({ containerStyle, ...props }: ProfileButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });

  return (
    <S.Container style={{ opacity: press, ...containerStyle }}>
      <S.Button onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
        <ProfileIcon />
      </S.Button>
    </S.Container>
  );
}

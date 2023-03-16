import { PressableProps, ViewStyle } from 'react-native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';
import { BellIcon } from '@/icons/BellIcon';

interface NotificationsButtonProps extends PressableProps {
  containerStyle?: ViewStyle;
  count?: number;
}

export function NotificationsButton({ count, containerStyle, ...props }: NotificationsButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });

  return (
    <S.Container style={{ opacity: press, ...containerStyle }}>
      <S.Button onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
        <BellIcon />
        {count && (
          <S.Badge>
            <S.BadgeText>{count > 9 ? '9+' : count}</S.BadgeText>
          </S.Badge>
        )}
      </S.Button>
    </S.Container>
  );
}

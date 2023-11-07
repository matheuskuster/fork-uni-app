import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { PressableProps, ViewStyle } from 'react-native';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { getUnreadNotifications } from '@/features/notifications/notificationsActions';
import { usePress } from '@/hooks/usePress';
import { BellIcon } from '@/icons/BellIcon';

interface NotificationsButtonProps extends PressableProps {
  containerStyle?: ViewStyle;
}

export function NotificationsButton({
  containerStyle,
  ...props
}: NotificationsButtonProps) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.notifications.count);
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });

  useEffect(() => {
    if (isFocused) {
      dispatch(getUnreadNotifications());
    }
  }, [isFocused]);

  return (
    <S.Container style={{ opacity: press, ...containerStyle }}>
      <S.Button onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
        <BellIcon />
        {count > 0 && (
          <S.Badge>
            <S.BadgeText>{count > 9 ? '9+' : count}</S.BadgeText>
          </S.Badge>
        )}
      </S.Button>
    </S.Container>
  );
}

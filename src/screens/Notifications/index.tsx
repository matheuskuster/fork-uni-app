import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import { Notification } from './Notification';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton } from '@/components';
import { getUnreadNotifications } from '@/features/notifications/notificationsActions';
import { notificationsSelectors } from '@/features/notifications/notificationsSlice';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';

export function Notifications() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const theme = useTheme();

  const notifications = useSelector((state) =>
    notificationsSelectors.selectAll(state.notifications),
  );

  useEffect(() => {
    if (isFocused) {
      dispatch(getUnreadNotifications());
    }
  }, [isFocused]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <BackButton
          onPress={() => navigation.goBack()}
          containerStyle={{
            backgroundColor: `${theme.colors.gray[750]}`,
            position: 'absolute',
            left: theme.spacing[4],
            bottom: theme.spacing[4] + 2,
          }}
        />
        <S.HeaderTitle>Notificações</S.HeaderTitle>
      </S.HeaderContainer>
      <S.ContentContainer>
        {notifications.length > 0 ? (
          <FlatList
            data={notifications}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
              <Notification
                id={item.id}
                title={item.message.title}
                date={new Date(item.createdAt)}
                description={item.message.description}
                isRead={item.seenAt !== null}
              />
            )}
          />
        ) : (
          <S.NoNotificationsText>
            Você não possui novas notificações
          </S.NoNotificationsText>
        )}
      </S.ContentContainer>
    </S.Container>
  );
}

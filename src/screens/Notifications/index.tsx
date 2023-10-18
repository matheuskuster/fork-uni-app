import { useNavigation } from '@react-navigation/native';
// import { useState, useMemo } from 'react';
// import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';

// import { Notification } from './Notification';
import * as S from './styles';

import { BackButton } from '@/components';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';

export function Notifications() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const theme = useTheme();
  // const [notifications, setNotifications] = useState(notificationsTest);

  // const sortByDate = () => {
  //   const sortedArray = notifications.sort((a, b) => {
  //     if (a.date > b.date) {
  //       return -1;
  //     }
  //     if (a.date < b.date) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   return sortedArray;
  // };

  // const notificationsSorted = useMemo(sortByDate, [notifications]);

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
        {/* <FlatList
          data={[]}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Notification
              title={item.title}
              date={item.date}
              description={item.description}
              isRead={item.isRead}
            />
          )}
        /> */}
        <S.NoNotificationsText>
          Você não possui notificações
        </S.NoNotificationsText>
      </S.ContentContainer>
    </S.Container>
  );
}

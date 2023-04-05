import { useState, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import { Notification } from './Notification';
import * as S from './styles';

import { BackButton } from '@/components';

const notificationsTest = [
  {
    id: '1',
    title: 'Bem vindo!',
    date: new Date('2023-04-01T03:24:00'),
    description: 'Sua conta foi criada com sucesso!',
    isRead: true,
  },
  {
    id: '2',
    title: 'Procurando sua van!',
    date: new Date('2023-04-02T03:24:00'),
    description: 'Recebemos seu pedido e estamos procurando sua van.',
    isRead: true,
  },
  {
    id: '3',
    title: 'Encontramos uma van!',
    date: new Date('2023-04-02T03:25:00'),
    description: 'Prossiga para o pagamento para poder embarcar.',
    isRead: true,
  },
  {
    id: '4',
    title: 'Pagamento aprovado',
    date: new Date('2023-04-02T03:26:00'),
    description: 'Seja bem vindo abordo, conheça seu motorista',
    isRead: false,
  },
  {
    id: '5',
    title: 'Encontramos uma van!',
    date: new Date('2023-04-03T03:24:00'),
    description: 'Prossiga para o pagamento para poder embarcar.',
    isRead: false,
  },
  {
    id: '6',
    title: 'Encontramos uma van!',
    date: new Date('2023-04-04T03:24:00'),
    description: 'Prossiga para o pagamento para poder embarcar.',
    isRead: false,
  },
  {
    id: '7',
    title: 'Encontramos uma van!',
    date: new Date('2023-04-04T03:24:00'),
    description: 'Prossiga para o pagamento para poder embarcar.',
    isRead: false,
  },
  {
    id: '8',
    title: 'Encontramos uma van!',
    date: new Date('2023-04-04T03:24:00'),
    description: 'Prossiga para o pagamento para poder embarcar.',
    isRead: false,
  },
];

export function Notifications() {
  const theme = useTheme();
  const [notifications, setNotifications] = useState(notificationsTest);

  const sortByDate = () => {
    const sortedArray = notifications.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }
      return 0;
    });

    return sortedArray;
  };

  const notificationsSorted = useMemo(sortByDate, [notifications]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <BackButton
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
        <FlatList
          data={notificationsSorted}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <Notification
              title={item.title}
              date={item.date}
              description={item.description}
              isRead={item.isRead}
            />
          )}
        />
      </S.ContentContainer>
    </S.Container>
  );
}

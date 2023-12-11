import { useEffect } from 'react';
import { Alert } from 'react-native';

import { Basemap } from './Basemap';
import { Boarding } from './Boarding';
import { Driver } from './Driver';
import { Header } from './Header';
import { Payment } from './Payment';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { savePushToken } from '@/features/notifications/notificationsActions';
import { getNoBoarding, getStudent } from '@/features/student/studentActions';
import { usePushNotifications } from '@/hooks/usePushNotifications';

export function Home() {
  const dispatch = useDispatch();

  const { expoPushToken } = usePushNotifications();
  const { isFetched, status } = useSelector((state) => state.student);

  useEffect(() => {
    if (!isFetched || !status) {
      try {
        dispatch(getStudent()).unwrap();
        dispatch(getNoBoarding()).unwrap();
      } catch (error) {
        Alert.alert('Erro ao buscar dados do estudante', `${error}`);
      }
    }
  }, [isFetched, status]);

  useEffect(() => {
    if (expoPushToken) {
      dispatch(savePushToken({ token: expoPushToken.data }));
    }
  }, [expoPushToken]);

  return (
    <S.Container>
      <Header />

      <S.ScrollContainer>
        <Basemap />
        <Driver />
        <Boarding />
        <Payment />
      </S.ScrollContainer>

      {/* <ChatButton
        containerStyle={{ position: 'absolute', right: 16, bottom: 16 }}
      /> */}
    </S.Container>
  );
}

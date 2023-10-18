import { useEffect } from 'react';
import { Alert } from 'react-native';

import { Basemap } from './Basemap';
import { Boarding } from './Boarding';
import { Driver } from './Driver';
import { Header } from './Header';
import { Payment } from './Payment';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { ChatButton } from '@/components';
import { getStudent } from '@/features/student/studentActions';

export function Home() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.student);

  useEffect(() => {
    if (!status) {
      handleStudentStates();
    }
  }, []);

  async function handleStudentStates() {
    try {
      await dispatch(getStudent());
    } catch (error) {
      Alert.alert('Erro ao buscar estudante', `${error}`);
    }
  }

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

import { useState } from 'react';

import { Basemap } from './Basemap';
import { Boarding } from './Boarding';
import { ConfirmationModal } from './ConfirmationModal';
import { Driver } from './Driver';
import { Header } from './Header';
import { Payment } from './Payment';
import * as S from './styles';

import { ChatButton } from '@/components';

export function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmBoarding, setIsConfirmBoarding] = useState(false);

  return (
    <S.Container>
      <ConfirmationModal
        isConfirmBoarding={isConfirmBoarding}
        visible={isModalVisible}
      />

      <Header />

      <S.ScrollContainer>
        <Basemap />
        <Driver status="searching" />
        <Boarding />
        <Payment />
      </S.ScrollContainer>

      <ChatButton
        containerStyle={{ position: 'absolute', right: 16, bottom: 16 }}
      />
    </S.Container>
  );
}

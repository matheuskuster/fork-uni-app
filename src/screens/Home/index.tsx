import { Basemap } from './Basemap';
import { Boarding } from './Boarding';
import { Driver } from './Driver';
import { Header } from './Header';
import { Payment } from './Payment';
import * as S from './styles';

import { ChatButton } from '@/components';

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.ScrollContainer>
        <Basemap />

        <Driver />

        <Boarding />

        <Payment />
      </S.ScrollContainer>

      <ChatButton
        containerStyle={{ position: 'absolute', right: 16, bottom: 16 }}
      />
    </S.Container>
  );
}

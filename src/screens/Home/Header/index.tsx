import * as S from './styles';

import { NotificationsButton, ProfileButton } from '@/components';

export function Header() {
  return (
    <S.HeaderContainer>
      <ProfileButton />
      <S.HeaderText>
        Olá, <S.HeaderHighLight>Gabriel</S.HeaderHighLight>!
      </S.HeaderText>
      <NotificationsButton />
    </S.HeaderContainer>
  );
}

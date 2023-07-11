import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { useSelector } from '@/app/hooks';
import { NotificationsButton, ProfileButton } from '@/components';
import { AppMainNavigatorRoutesProps } from '@/routes/app.routes';

export function Header() {
  const navigaton = useNavigation<AppMainNavigatorRoutesProps>();

  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return null;
  }

  return (
    <S.HeaderContainer>
      <ProfileButton onPress={() => navigaton.navigate('profile')} />
      <S.HeaderText>
        Olá, <S.HeaderHighLight>{user.firstName}</S.HeaderHighLight>!
      </S.HeaderText>
      <NotificationsButton
        onPress={() => navigaton.navigate('notifications')}
      />
    </S.HeaderContainer>
  );
}

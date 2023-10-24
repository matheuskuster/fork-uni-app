import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

import { MenuOption } from './MenuOption';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton } from '@/components';
import { signOut } from '@/features/auth/authSlice';
import { signOutStudent } from '@/features/student/studentSlice';
import { ChatIcon } from '@/icons/ChatIcon';
import { NotePencilIcon } from '@/icons/NotePencilIcon';
import { ProfileNavigatorRoutesProps } from '@/routes/profile.routes';
import { theme } from '@/theme';
import { whatsAppLink } from '@/utils/constants/whatsAppLink';

export function ProfileList() {
  const dispatch = useDispatch();

  const navigation = useNavigation<ProfileNavigatorRoutesProps>();
  const { user } = useSelector((state) => state.auth);

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
          onPress={() => navigation.goBack()}
        />
        <S.HeaderTitle>Perfil</S.HeaderTitle>
      </S.HeaderContainer>

      <S.ContentContainer>
        <S.UserContainer>
          <S.UserPhotoContainer>
            <S.UserPhoto>
              {user?.name
                .split(' ')
                .map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null))
                .join('')}
            </S.UserPhoto>
          </S.UserPhotoContainer>
          <S.UserName>{user?.name}</S.UserName>
        </S.UserContainer>

        <S.Separator />

        <MenuOption
          icon={<NotePencilIcon />}
          title="Conta"
          description="Seus dados pessoais"
          onPress={() => navigation.push('myData')}
        />
        <S.Separator />

        {/* <MenuOption
          icon={<QuestionIcon />}
          title="Dúvidas Frequentes"
          description="Tire suas dúvidas"
        />

        <S.Separator /> */}

        <MenuOption
          icon={<ChatIcon size={28} color={theme.colors.green[500]} />}
          title="Suporte"
          description="Estamos aqui para te ajudar"
          onPress={() => {
            Linking.openURL(whatsAppLink.url);
          }}
        />

        <S.Separator />

        {/* <MenuOption
          icon={<GearIcon />}
          title="Configurações"
          description="Definições do aplicativo"
        />

        <S.Separator /> */}

        <MenuOption
          icon={
            <Feather name="log-out" size={28} color={theme.colors.green[500]} />
          }
          title="Sair"
          description="Voltar para a tela de entrada"
          onPress={() => {
            dispatch(signOutStudent());
            dispatch(signOut());
          }}
        />
      </S.ContentContainer>
    </S.Container>
  );
}

import { useNavigation } from '@react-navigation/native';

import { MenuOption } from './MenuOption';
import * as S from './styles';

import { useSelector } from '@/app/hooks';
import { BackButton } from '@/components';
import { ChatIcon } from '@/icons/ChatIcon';
import { GearIcon } from '@/icons/GearIcon';
import { NotePencilIcon } from '@/icons/NotePencilIcon';
import { QuestionIcon } from '@/icons/QuestionIcon';
import { WhatsAppIcon } from '@/icons/WhatsAppIcon';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';
import { theme } from '@/theme';

export function Profile() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
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
              {user?.name.split(' ').map((name) => name[0])}
            </S.UserPhoto>
          </S.UserPhotoContainer>
          <S.UserName>{user?.name}</S.UserName>
        </S.UserContainer>
        <MenuOption
          icon={<WhatsAppIcon size={28} />}
          title="Grupo de WhatsApp"
          description="Acompanhe em tempo real a localização da van"
        />
        <S.Separator />
        <MenuOption
          icon={<NotePencilIcon />}
          title="Meus Dados"
          description="Seus dados pessoais"
        />
        <S.Separator />
        <MenuOption
          icon={<QuestionIcon />}
          title="Dúvidas Frequentes"
          description="Tire suas dúvidas"
        />
        <S.Separator />
        <MenuOption
          icon={<ChatIcon size={28} color={theme.colors.green[500]} />}
          title="Fale conosco"
          description="Estamos aqui para te ajudar"
        />
        <S.Separator />
        <MenuOption
          icon={<GearIcon />}
          title="Configurações"
          description="Definições do aplicativo"
        />
      </S.ContentContainer>
    </S.Container>
  );
}

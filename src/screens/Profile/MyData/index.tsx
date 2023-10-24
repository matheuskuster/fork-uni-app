import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { MenuOption } from '../MenuOption';

import { useSelector } from '@/app/hooks';
import { BackButton, Button } from '@/components';
import { AlertIcon } from '@/icons/AlertIcon';
import { ProfileIcons } from '@/icons/ProfileIcons';
import { ProfileNavigatorRoutesProps } from '@/routes/profile.routes';
import { theme } from '@/theme';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

export function MyPersonalData() {
  const navigation = useNavigation<ProfileNavigatorRoutesProps>();
  const { user } = useSelector((state) => state.auth);
  const { home } = useSelector((state) => state.student);

  if (!user || !home) {
    navigation.goBack();
    return null;
  }

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
        <S.HeaderTitle>Meus dados</S.HeaderTitle>
      </S.HeaderContainer>

      <S.Content>
        <S.Section>
          <S.SectionTitle>Dados de login</S.SectionTitle>
          <MenuOption
            title="Meu email"
            description={user.email}
            icon={<ProfileIcons.Email />}
          />

          <S.Separator />

          <MenuOption
            title="Senha de acesso"
            description="********"
            icon={<ProfileIcons.Password />}
          />

          <S.Separator />
        </S.Section>

        <S.Section>
          <S.SectionTitle>Informações sobre você</S.SectionTitle>
          <MenuOption
            title="Nome"
            description={user.name}
            icon={<ProfileIcons.User />}
          />

          <S.Separator />

          <MenuOption
            title="Número de celular"
            description={formatPhoneNumber(user.phone)}
            icon={<ProfileIcons.Smartphone />}
          />

          <S.Separator />

          <MenuOption
            title="CPF"
            description={user.cpf}
            icon={<ProfileIcons.User />}
          />

          <S.Separator />
          <MenuOption
            title="Endereço"
            description={home.formatted ?? home.street}
            icon={<ProfileIcons.Address />}
          />

          <S.Separator />
        </S.Section>

        <S.Section>
          <S.SectionTitle color={theme.colors.red[500]}>
            Excluir minha conta
          </S.SectionTitle>

          <S.DeleteAccountButtonContainer>
            <Button
              onPress={() => navigation.push('deleteAccount')}
              rightIcon={<AlertIcon />}
              variant="danger"
            >
              Excluir minha conta
            </Button>
          </S.DeleteAccountButtonContainer>
        </S.Section>
      </S.Content>
    </S.Container>
  );
}

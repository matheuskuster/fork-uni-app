import { Feather, FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { MenuOption } from '../MenuOption';

import { useSelector } from '@/app/hooks';
import { BackButton } from '@/components';
import { theme } from '@/theme';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

export function MyPersonalData() {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);
  const { home } = useSelector((state) => state.student);

  if (!user || !home) {
    return navigation.goBack();
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
            icon={
              <Ionicons
                name="paper-plane-outline"
                size={24}
                color={theme.colors.primary}
              />
            }
          />

          <S.Separator />

          <MenuOption
            title="Senha de acesso"
            description="********"
            icon={
              <Octicons name="lock" size={24} color={theme.colors.primary} />
            }
          />

          <S.Separator />
        </S.Section>

        <S.Section>
          <S.SectionTitle>Informações sobre você</S.SectionTitle>
          <MenuOption
            title="Nome"
            description={user.name}
            icon={
              <Ionicons
                name="md-person-outline"
                size={24}
                color={theme.colors.primary}
              />
            }
          />

          <S.Separator />

          <MenuOption
            title="Número de celular"
            description={formatPhoneNumber(user.phone)}
            icon={
              <Ionicons
                name="md-phone-portrait-outline"
                size={24}
                color={theme.colors.primary}
              />
            }
          />

          <S.Separator />

          <MenuOption
            title="CPF"
            description={user.cpf}
            icon={
              <FontAwesome5
                name="id-badge"
                size={24}
                color={theme.colors.primary}
              />
            }
          />

          <S.Separator />
          <MenuOption
            title="Endereço"
            description={home.formatted ?? home.street}
            icon={
              <Feather name="map-pin" size={24} color={theme.colors.primary} />
            }
          />

          <S.Separator />
        </S.Section>
      </S.Content>
    </S.Container>
  );
}

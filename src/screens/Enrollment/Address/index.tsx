import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import { BackButton, Input, NextButton, Title } from '@/components';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';

export function Address() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();

  return (
    <S.Container scrollEnabled={false}>
      <S.Header>
        <BackButton onPress={() => navigaton.goBack()} />

        <S.HeaderContent>
          <S.IconContainer>
            <Feather
              name="map-pin"
              size={theme.sizes[8]}
              color={theme.colors.gray[850]}
            />
          </S.IconContainer>
          <Title color={theme.colors.gray[50]}>Endereço</Title>
        </S.HeaderContent>
      </S.Header>

      <S.Body>
        <S.Content>
          <Input placeholder="29090-540" disabled />
          <Input placeholder="Endereço" autoComplete="street-address" />
          <Input placeholder="Número" inputMode="numeric" />
          <Input placeholder="Complemento" />
          <Input placeholder="Estado" />
          <Input placeholder="Cidade" />
          <Input placeholder="Bairro" />
        </S.Content>
      </S.Body>

      <S.Footer>
        <S.FooterMessage>
          Você já acessa o painel de controle! {'\n'} Ainda não faremos nenhuma
          cobrança
        </S.FooterMessage>
        <NextButton onPress={() => console.log('NextButton Pressed')}>
          Quero embarcar
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

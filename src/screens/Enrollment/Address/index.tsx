import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import { BackButton, Input, NextButton, Title } from '@/components';
import { enroll } from '@/features/auth/authSlice';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';

export function Address() {
  const dispatch = useDispatch();
  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();

  return (
    <S.Container scrollEnabled={false}>
      <S.Header>
        <BackButton onPress={() => navigaton.goBack()} />

        <S.HeaderContent>
          <S.IconContainer>
            <Feather name="map-pin" size={32} color="#0F0F0F" />
          </S.IconContainer>
          <Title color="#F0F0F0">Endereço</Title>
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
        <NextButton onPress={() => dispatch(enroll())}>
          Quero embarcar
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, Input, NextButton, Title } from '@/components';
import { enroll } from '@/features/auth/authSlice';
import { createStudent } from '@/features/student/studentActions';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';

export function Address() {
  const { user } = useSelector((state) => state.auth);
  const { quotation, zipcodeAddress, choosenShift } = useSelector(
    (state) => state.quotation,
  );
  const { isCreating, error } = useSelector((state) => state.student);
  const theme = useTheme();

  const dispatch = useDispatch();
  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit() {
    setSubmitted(true);
    dispatch(
      createStudent({
        institutionId: quotation!.institution.id,
        name: user!.name,
        shift: choosenShift!,
        home: {
          city: zipcodeAddress!.city,
          neighborhood: quotation!.neighborhood.name,
          number: '222',
          state: zipcodeAddress!.state,
          street: zipcodeAddress!.street,
          zipcode: zipcodeAddress!.zipcode,
          complement: 'Apt. 1002',
        },
      }),
    );
  }

  useEffect(() => {
    if (!isCreating && submitted && !error) {
      dispatch(enroll());
    }
  }, [isCreating]);

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
          <Input placeholder={zipcodeAddress?.zipcode} disabled />
          <Input autoComplete="street-address" value={zipcodeAddress?.street} />
          <Input placeholder="Número" inputMode="numeric" />
          <Input placeholder="Complemento" />
          <Input placeholder={zipcodeAddress?.state} disabled />
          <Input placeholder={zipcodeAddress?.city} disabled />
          <Input placeholder={quotation?.neighborhood.name} disabled />
        </S.Content>
      </S.Body>

      <S.Footer>
        <S.FooterMessage>
          Você já acessa o painel de controle! {'\n'} Ainda não faremos nenhuma
          cobrança
        </S.FooterMessage>
        <NextButton onPress={onSubmit} isLoading={isCreating}>
          Quero embarcar
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

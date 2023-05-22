import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, Input, NextButton, Title } from '@/components';
import { getMe } from '@/features/auth/authActions';
import { createStudent } from '@/features/student/studentActions';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';

interface AddressFormData {
  streetName: string;
  number: string;
  complement: string;
}

export function Address() {
  const { user } = useSelector((state) => state.auth);
  const { quotation, zipcodeAddress, choosenShift } = useSelector(
    (state) => state.quotation,
  );
  const { isCreating } = useSelector((state) => state.student);
  const theme = useTheme();

  const dispatch = useDispatch();
  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();

  const { handleSubmit, control } = useForm<AddressFormData>({
    defaultValues: {
      streetName: zipcodeAddress?.street,
    },
  });

  async function onSubmit(data: AddressFormData) {
    try {
      await dispatch(
        createStudent({
          institutionId: quotation!.institution.id,
          name: user!.name,
          shift: choosenShift!,
          home: {
            city: zipcodeAddress!.city,
            neighborhood: quotation!.neighborhood.name,
            number: data.number,
            state: zipcodeAddress!.state,
            street: data.streetName,
            zipcode: zipcodeAddress!.zipcode,
            complement: data.complement,
          },
        }),
      ).unwrap();

      dispatch(getMe());
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao finalizar inscrição', `${error}`);
    }
  }

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
          <Controller
            control={control}
            name="streetName"
            render={({ field: { value, onChange } }) => (
              <Input
                autoComplete="street-address"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="number"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Número"
                inputMode="numeric"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="complement"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Complemento"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

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
        <NextButton onPress={handleSubmit(onSubmit)} isLoading={isCreating}>
          Quero embarcar
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

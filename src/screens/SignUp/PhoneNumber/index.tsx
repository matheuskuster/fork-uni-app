import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { ZStack, VStack, Spacer } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import {
  BackButton,
  Description,
  GoogleButton,
  Input,
  NextButton,
  Subtitle,
  Title,
} from '@/components';
import { addPhoneNumber } from '@/features/signup/signupSlice';
import { SignUpNavigatorRoutesProps } from '@/routes/auth.routes';
import { mask } from '@/utils/constants/masks';

interface PhoneDataForm {
  phone: string;
}

export function PhoneNumber() {
  const theme = useTheme();
  const navigation = useNavigation<SignUpNavigatorRoutesProps>();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PhoneDataForm>({ defaultValues: { phone: '' } });

  const onSubmit = (data: PhoneDataForm) => {
    const { phone } = data;

    dispatch(addPhoneNumber({ phone }));
    navigation.navigate('personalData');
  };

  // TODO: make mask for phone number, cpf and birth

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.Header>
        <BackButton onPress={navigation.goBack} />

        <S.HeaderContent>
          <Subtitle>CADASTRO</Subtitle>
          <Title color={theme.colors.gray['50']}>
            Insira seu número de celular
          </Title>
          <Description>
            Fique tranquilo! Utilizamos seu número de telefone para a validação
            em nossa plataforma.
          </Description>
        </S.HeaderContent>
      </S.Header>

      <S.Content>
        <S.Body>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: 'Insira seu número de celular',
              pattern: {
                value:
                  /^\+55\s?\(?([1-9]{2})\)?\s?(?:9[1-9]|[2-9][0-9])\d{3}-?\d{4}$/i,
                message: 'Insira um número de celular válido',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                placeholder="27 98765 4321"
                mask={mask.phone}
                inputMode="tel"
                autoComplete="tel-national"
                hasError={!!errors.phone}
                errorMessage={errors.phone?.message}
              />
            )}
          />
          <ZStack style={{ width: '100%', marginTop: theme.spacing[2] }}>
            <S.DivisionLine />
            <S.DivisionTextContainer>
              <S.DivisionText>ou</S.DivisionText>
            </S.DivisionTextContainer>
          </ZStack>
          <VStack spacing={4}>
            <Spacer />
            <GoogleButton>Cadastre-se com o Google</GoogleButton>
          </VStack>
        </S.Body>

        <S.Footer>
          <NextButton onPress={handleSubmit(onSubmit)}>Avançar</NextButton>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}

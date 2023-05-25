import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { VStack, Spacer } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import { CheckIcon } from './checkIcon';
import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import {
  BackButton,
  Description,
  NextButton,
  SecretInput,
  Space,
  Subtitle,
  Title,
} from '@/components';
import { addPassword } from '@/features/signup/signupSlice';
import { SignUpNavigatorRoutesProps } from '@/routes/auth.routes';

interface PasswordDataForm {
  password: string;
  repassword: string;
}

export function SecurityPassword() {
  const theme = useTheme();
  const navigation = useNavigation<SignUpNavigatorRoutesProps>();
  const dispatch = useDispatch();

  const passwordRef = useRef<TextInput>(null);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<PasswordDataForm>({
    defaultValues: { password: '', repassword: '' },
  });

  function onSubmit(data: PasswordDataForm) {
    const { password } = data;

    dispatch(addPassword({ password }));
    navigation.navigate('terms');
  }

  function validatePassword(password: string) {
    const validations = {
      minCharacters: password.length >= 6,
      upperCase: /[A-Z]/.test(password),
      lowerCase: /[a-z]/.test(password),
      specialChar: /[!@#//$()[%^&*]/.test(password),
      number: /[0-9]/.test(password),
    };
    return {
      isValid: Object.values(validations).every(
        (validatePassword) => validatePassword === true,
      ),
      validations,
    };
  }

  const { validations } = validatePassword(watch('password'));

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.Header>
        <BackButton onPress={navigation.goBack} />

        <VStack spacing={2}>
          <Subtitle>CADASTRO</Subtitle>
          <Title color={theme.colors.gray['50']}>
            Crie uma senha segura de acesso
          </Title>
          <Description>
            Proteja sua conta! Não crie uma senha fácil nem compartilhe com
            terceiros.
          </Description>
        </VStack>
      </S.Header>

      <S.Body>
        <S.Content>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Digite uma senha',
              validate: {
                password: (value) =>
                  validatePassword(value).isValid ||
                  'Digite uma senha segura de acesso',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <SecretInput
                value={value}
                onChangeText={onChange}
                placeholder="Senha"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
                enablesReturnKeyAutomatically
                hasError={!!errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Space size={theme.spacing[2]} />

          <Controller
            name="repassword"
            control={control}
            rules={{
              required: 'Repita a sua senha',
              validate: {
                password: (value) =>
                  value === watch('password') ||
                  'As senhas não coincidem, tente novamente',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <SecretInput
                placeholder="Repita a senha"
                ref={passwordRef}
                onChangeText={onChange}
                value={value}
                hasError={!!errors.repassword}
                errorMessage={errors.repassword?.message}
              />
            )}
          />

          <Space size={theme.spacing[2]} />

          <VStack alignment="leading" spacing={1.5}>
            <S.VerificationContainer>
              <CheckIcon isValid={validations.minCharacters} />
              <S.VerificationText>Pelo menos 6 caracteres</S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <CheckIcon isValid={validations.upperCase} />
              <S.VerificationText>Uma letra maiúscula</S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <CheckIcon isValid={validations.lowerCase} />
              <S.VerificationText>Uma letra minúscula</S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <CheckIcon isValid={validations.specialChar} />
              <S.VerificationText>
                Caracter especial (-!#$%&*+)
              </S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <CheckIcon isValid={validations.number} />
              <S.VerificationText>Um número</S.VerificationText>
            </S.VerificationContainer>
          </VStack>
        </S.Content>
      </S.Body>

      <S.Footer>
        <NextButton onPress={handleSubmit(onSubmit)}>Avançar</NextButton>
      </S.Footer>
    </S.Container>
  );
}

import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native';
import { VStack, Spacer } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { Input, Button, SecretInput, GoogleButton } from '@/components';
import { signInUser } from '@/features/auth/authActions';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormData>({ defaultValues: { email: '', password: '' } });

  const passwordRef = useRef<TextInput>(null);

  const onSubmit = (data: SignInFormData) => {
    const { email, password } = data;

    dispatch(signInUser({ email, password }));
  };

  return (
    <S.Container scrollEnabled={false}>
      <S.Content>
        <S.Title>Olá,</S.Title>
        <S.Subtitle>Faça login para poder embarcar!</S.Subtitle>

        <VStack spacing={5}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Insira seu email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Insira um e-mail válido',
              },
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                autoFocus
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
                enablesReturnKeyAutomatically
                containerStyle={
                  errors.email
                    ? {
                        borderColor: theme.colors.red['500'],
                        borderWidth: parseFloat(theme.spacing.px),
                        borderRadius: parseFloat(theme.radii.lg),
                      }
                    : {}
                }
              />
            )}
          />
          <>
            {errors.email && (
              <S.FormErrorMessage>{errors.email.message}</S.FormErrorMessage>
            )}
          </>

          <Spacer />
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Insira sua senha' }}
            render={({ field: { value, onChange } }) => (
              <SecretInput
                value={value}
                onChangeText={onChange}
                placeholder="Senha"
                ref={passwordRef}
                enablesReturnKeyAutomatically
                onSubmitEditing={handleSubmit(onSubmit)}
                containerStyle={
                  errors.password
                    ? {
                        borderColor: theme.colors.red['500'],
                        borderWidth: parseFloat(theme.spacing.px),
                        borderRadius: parseFloat(theme.radii.lg),
                      }
                    : {}
                }
              />
            )}
          />
          <>
            {errors.password && (
              <S.FormErrorMessage>{errors.password.message}</S.FormErrorMessage>
            )}
          </>
        </VStack>

        <S.RegisterButton>
          <S.TextForgotPassword>Esqueci minha senha</S.TextForgotPassword>
        </S.RegisterButton>
        <VStack spacing={4}>
          <Spacer />
          <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
            Entrar
          </Button>
          <Spacer />
          <S.TextCotinueWithGoogle>continuar com:</S.TextCotinueWithGoogle>
          <Spacer />
          <GoogleButton>Google</GoogleButton>
        </VStack>
      </S.Content>

      <S.RegisterContainer>
        <S.RegisterText>Saiba agora o valor da sua van!</S.RegisterText>
        <S.RegisterButton>
          <S.HighLight>Cadastre-se</S.HighLight>
        </S.RegisterButton>
      </S.RegisterContainer>
    </S.Container>
  );
}

import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Alert } from 'react-native';
import { VStack, Spacer } from 'react-native-stacks';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { Input, Button, SecretInput } from '@/components';
import { signInUser } from '@/features/auth/authActions';
import { AuthNavigatorRoutesProps } from '@/routes/auth.routes';
import { regexPatterns } from '@/utils/constants/regexPatterns';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const dispatch = useDispatch();
  const passwordRef = useRef<TextInput>(null);
  const { isLoading } = useSelector((state) => state.auth);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormData>({ defaultValues: { email: '', password: '' } });

  async function onSubmit(data: SignInFormData) {
    const { email, password } = data;

    try {
      await dispatch(signInUser({ email, password })).unwrap();
    } catch (error) {
      Alert.alert('Erro ao fazer login', `${error}`);
    }
  }

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
                value: regexPatterns.email,
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
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />

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
                hasError={!!errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </VStack>

        <S.RegisterButton onPress={() => navigation.navigate('forgotPassword')}>
          <S.TextForgotPassword>Esqueci minha senha</S.TextForgotPassword>
        </S.RegisterButton>
        <VStack spacing={4}>
          <Spacer />
          <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
            Entrar
          </Button>
          {/* <Spacer />
          <S.TextCotinueWithGoogle>continuar com:</S.TextCotinueWithGoogle>
          <Spacer />
          <GoogleButton>Google</GoogleButton> */}
        </VStack>
      </S.Content>

      <S.RegisterContainer>
        <S.RegisterText>Saiba agora o valor da sua van!</S.RegisterText>
        <S.RegisterButton onPress={() => navigation.push('signUpRoute')}>
          <S.HighLight>Cadastre-se</S.HighLight>
        </S.RegisterButton>
      </S.RegisterContainer>
    </S.Container>
  );
}

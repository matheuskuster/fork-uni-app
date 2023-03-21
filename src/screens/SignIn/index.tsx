import { useRef } from 'react';
import { TextInput } from 'react-native';
import { VStack, Spacer } from 'react-native-stacks';

import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import { Input, Button, SecretInput, GoogleButton } from '@/components';
import { signIn } from '@/features/auth/authSlice';

export function SignIn() {
  const dispatch = useDispatch();
  const passwordRef = useRef<TextInput>(null);

  return (
    <S.Container scrollEnabled={false}>
      <S.Content>
        <S.Title>Olá,</S.Title>
        <S.Subtitle>Faça login para poder embarcar!</S.Subtitle>

        <VStack spacing={5}>
          <Input
            autoFocus
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            enablesReturnKeyAutomatically
          />
          <Spacer />
          <SecretInput placeholder="Senha" ref={passwordRef} />
        </VStack>

        <S.RegisterButton>
          <S.TextForgotPassword>Esqueci minha senha</S.TextForgotPassword>
        </S.RegisterButton>

        <VStack spacing={4}>
          <Spacer />
          <Button
            onPress={() =>
              dispatch(
                signIn({
                  token: '123456789',
                  user: {
                    id: '1',
                    name: 'John Doe',
                    roles: ['student'],
                    email: 'john@doe.com',
                  },
                }),
              )
            }
          >
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

import { Feather } from '@expo/vector-icons';
import { useRef } from 'react';
import { TextInput } from 'react-native';
import { VStack, Spacer } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import * as S from './styles';

import {
  BackButton,
  Description,
  NextButton,
  SecretInput,
  Subtitle,
  Title,
} from '@/components';

export function SecurityPassword() {
  const theme = useTheme();
  const passwordRef = useRef<TextInput>(null);

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.Header>
        <BackButton />

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
          <SecretInput
            placeholder="Senha"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            enablesReturnKeyAutomatically
          />
          <SecretInput placeholder="Repita a senha" ref={passwordRef} />

          <VStack alignment="leading" spacing={1.5}>
            <S.VerificationContainer>
              <Feather
                name="check"
                size={theme.spacing['3']}
                color={theme.colors.green[750]}
              />
              <S.VerificationText>Pelo menos 6 caracteres</S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <Feather
                name="x"
                size={theme.spacing['3']}
                color={theme.colors.red[550]}
              />
              <S.VerificationText>Uma letra maiúscula</S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <Feather
                name="x"
                size={theme.spacing['3']}
                color={theme.colors.red[550]}
              />
              <S.VerificationText>Uma letra minúscula</S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <Feather
                name="x"
                size={theme.spacing['3']}
                color={theme.colors.red[550]}
              />
              <S.VerificationText>
                Caracter especial (-!#$%&*+)
              </S.VerificationText>
            </S.VerificationContainer>
            <Spacer />
            <S.VerificationContainer>
              <Feather
                name="x"
                size={theme.spacing['3']}
                color={theme.colors.red[550]}
              />
              <S.VerificationText>Um número</S.VerificationText>
            </S.VerificationContainer>
          </VStack>
        </S.Content>
      </S.Body>

      <S.Footer>
        <NextButton>Avançar</NextButton>
      </S.Footer>
    </S.Container>
  );
}

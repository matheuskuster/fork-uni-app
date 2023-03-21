import { useRef } from 'react';
import { TextInput } from 'react-native';

import * as S from './styles';

import {
  BackButton,
  Description,
  Input,
  NextButton,
  Subtitle,
  Title,
} from '@/components';

export function ThirdParty() {
  const passwordRef = useRef<TextInput>(null);

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.Header>
        <BackButton />

        <S.HeaderContent>
          <Subtitle>CADASTRO</Subtitle>
          <Title color="#F0F0F0">Complete seu cadastro</Title>
          <Description>
            Precisamos de mais algumas informações para completar seu perfil.
          </Description>
        </S.HeaderContent>
      </S.Header>

      <S.Content>
        <S.InputContainer>
          <Input
            placeholder="CPF"
            inputMode="numeric"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            enablesReturnKeyAutomatically
          />
          <Input
            placeholder="Telefone"
            inputMode="numeric"
            autoComplete="tel"
            ref={passwordRef}
          />
        </S.InputContainer>

        <S.Footer>
          <NextButton>Confirmar dados</NextButton>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}

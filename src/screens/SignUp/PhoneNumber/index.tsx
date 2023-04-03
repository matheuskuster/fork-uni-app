import { ZStack, VStack, Spacer } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import * as S from './styles';

import {
  BackButton,
  Description,
  GoogleButton,
  Input,
  NextButton,
  Subtitle,
  Title,
} from '@/components';

export function PhoneNumber() {
  const theme = useTheme();

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.Header>
        <BackButton />

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
          <Input
            placeholder="27 98765 4321"
            inputMode="tel"
            autoComplete="tel-national"
          />
          <ZStack style={{ width: '100%' }}>
            <S.DivisionLine />
            <S.DivisionTextContainer>
              <S.DivisionText>ou</S.DivisionText>
            </S.DivisionTextContainer>
          </ZStack>
          <VStack spacing={3.5}>
            <Spacer />
            <GoogleButton>Cadastre-se com o Google</GoogleButton>
          </VStack>
        </S.Body>

        <S.Footer>
          <NextButton>Avançar</NextButton>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}

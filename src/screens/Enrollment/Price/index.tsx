import { useNavigation } from '@react-navigation/native';
import { VStack, Spacer } from 'react-native-stacks';

import * as S from './styles';

import { BackButton, NextButton, Title } from '@/components';
import { Receipt } from '@/icons/Receipt';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';

export function Price() {
  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => navigaton.goBack()} />

        <S.HeaderContent>
          <S.IconContainer>
            <Receipt />
          </S.IconContainer>
          <Title color="#F0F0F0">Cotação</Title>
        </S.HeaderContent>
      </S.Header>

      <S.Body>
        <S.Content>
          <VStack alignment="leading" spacing={4}>
            <S.ClassText>ROTA:</S.ClassText>
            <S.ClassValueText>Jardim Camburi x UVV</S.ClassValueText>
            <Spacer />
            <S.ClassText>TURNO:</S.ClassText>
            <S.ClassValueText>Matutino</S.ClassValueText>
            <Spacer />
            <S.ClassText>VALOR:</S.ClassText>
            <S.ClassValueText>
              <S.HighLight>140,00</S.HighLight>/mês
            </S.ClassValueText>
            <Spacer />
            <S.ClassText>Formas de pagamento:</S.ClassText>
            <S.ClassValueText>Cartão de Crédito, Boleto e PIX</S.ClassValueText>
          </VStack>
        </S.Content>
      </S.Body>

      <S.Footer>
        <S.FooterMessage>
          Relaxa, você só paga após ter uma van para chamar de sua
        </S.FooterMessage>
        <NextButton onPress={() => navigaton.push('address')}>
          Próximo
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

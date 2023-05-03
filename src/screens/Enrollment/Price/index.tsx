import { useNavigation } from '@react-navigation/native';
import { VStack, Spacer } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useSelector } from '@/app/hooks';
import { BackButton, NextButton, Title } from '@/components';
import { Receipt } from '@/icons/Receipt';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';
import { shiftTranslation } from '@/utils/constants/shiftTranslation';
import { formatPrice } from '@/utils/formatPrice';

export function Price() {
  const theme = useTheme();

  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();

  const { quotation } = useSelector((state) => state.quotation);

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => navigaton.goBack()} />

        <S.HeaderContent>
          <S.IconContainer>
            <Receipt />
          </S.IconContainer>
          <Title color={theme.colors.gray[50]}>Cotação</Title>
        </S.HeaderContent>
      </S.Header>

      <S.Body>
        <S.Content>
          <VStack alignment="leading" spacing={4}>
            <S.ClassText>ROTA:</S.ClassText>
            <S.ClassValueText>
              {quotation?.neighborhood.name} x {quotation?.institution.acronym}
            </S.ClassValueText>
            <Spacer />
            <S.ClassText>TURNO:</S.ClassText>
            <S.ClassValueText>
              {
                shiftTranslation[
                  quotation?.shift as keyof typeof shiftTranslation
                ]
              }
            </S.ClassValueText>
            <Spacer />
            <S.ClassText>VALOR:</S.ClassText>
            <S.ClassValueText>
              <S.HighLight>
                {formatPrice(quotation!.cost, { showCurrency: false })}
              </S.HighLight>
              /mês
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

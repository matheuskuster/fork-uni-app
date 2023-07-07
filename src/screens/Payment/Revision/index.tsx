import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useSelector } from '@/app/hooks';
import { BackButton, Input, NextButton } from '@/components';
import { CardsIcon } from '@/icons/CardsIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';
import { shiftTranslation } from '@/utils/constants/shiftTranslation';

export function Revision() {
  const theme = useTheme();
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();
  const { home, university, shift, name } = useSelector(
    (state) => state.student,
  );

  return (
    <S.Container>
      <S.HeaderContainer>
        <BackButton
          containerStyle={{
            backgroundColor: `${theme.colors.gray[750]}`,
            position: 'absolute',
            left: theme.spacing[4],
            bottom: theme.spacing[4],
          }}
          onPress={() => navigation.goBack()}
        />
        <S.HeaderTitle>Revisão e Pagamento</S.HeaderTitle>
      </S.HeaderContainer>

      <S.ContentContainer>
        <S.SimpleText>Revisão:</S.SimpleText>
        <S.RevisionContainer>
          <S.RevisionTitle>PASSAGEIRO:</S.RevisionTitle>
          <S.RevisionDescription>{name}</S.RevisionDescription>
          <S.RevisionTitle>ROTA:</S.RevisionTitle>
          <S.RevisionDescription>
            {home?.neighborhood} X {university?.acronym}
          </S.RevisionDescription>
          <S.RevisionTitle>TURNO:</S.RevisionTitle>
          <S.RevisionDescription>
            {/* @ts-ignore */}
            {shiftTranslation[shift]}
          </S.RevisionDescription>
        </S.RevisionContainer>

        <S.SimpleText>Possui cupom ou vale?</S.SimpleText>
        <Input
          autoCapitalize="characters"
          placeholder="CUPOM"
          containerStyle={{ marginBottom: theme.spacing[6] }}
          rightIcon={
            <S.ApplyButton>
              <S.ApplyButtonText>APLICAR</S.ApplyButtonText>
            </S.ApplyButton>
          }
        />

        <S.SimpleText>Método de pagamento:</S.SimpleText>
        <S.PaymentMethodButton onPress={() => navigation.navigate('method')}>
          <CardsIcon />
          <S.PaymentMethodText>
            Escolher método de pagamento
          </S.PaymentMethodText>
        </S.PaymentMethodButton>

        <S.Subtotal>
          <S.BalanceText>Subtotal:</S.BalanceText>
          <S.BalanceText>140,10</S.BalanceText>
        </S.Subtotal>
        <S.Discount>
          <S.BalanceText>Desconto:</S.BalanceText>
          <S.BalanceText>- 10,00</S.BalanceText>
        </S.Discount>
        <S.Total>
          <S.TotalText>Total:</S.TotalText>
          <S.TotalText>130,10</S.TotalText>
        </S.Total>

        <NextButton disabled>Finalizar</NextButton>
      </S.ContentContainer>
    </S.Container>
  );
}

import { useTheme } from 'styled-components';

import * as S from './styles';

import { BackButton, Input, NextButton } from '@/components';
import { CardsIcon } from '@/icons/CardsIcon';

export function Revision() {
  const theme = useTheme();

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
        />
        <S.HeaderTitle>Revisão e Pagamento</S.HeaderTitle>
      </S.HeaderContainer>

      <S.ContentContainer>
        <S.SimpleText>Revisão:</S.SimpleText>
        <S.RevisionContainer>
          <S.RevisionTitle>PASSAGEIRO:</S.RevisionTitle>
          <S.RevisionDescription>
            Gabriel Rodrigues da Silva
          </S.RevisionDescription>
          <S.RevisionTitle>ROTA:</S.RevisionTitle>
          <S.RevisionDescription>Jardim Camburi x UVV</S.RevisionDescription>
          <S.RevisionTitle>TURNO:</S.RevisionTitle>
          <S.RevisionDescription>Matutino</S.RevisionDescription>
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
        <S.PaymentMethodButton>
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

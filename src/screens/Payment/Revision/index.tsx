import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, CardIcon, Input, NextButton } from '@/components';
import { CreditCardBrand } from '@/features/billing/creditCardSlice';
import { getStudent } from '@/features/student/studentActions';
import { createCreditCardSubscription } from '@/features/subscription/subscriptionActions';
import { CardsIcon } from '@/icons/CardsIcon';
import { PencilIcon } from '@/icons/PencilIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { shiftTranslation } from '@/utils/constants/shiftTranslation';
import { formatPrice } from '@/utils/formatPrice';

export function Revision() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();
  const { home, university, shift, name, quotationCost } = useSelector(
    (state) => state.student,
  );
  const { creditCard, isCreating } = useSelector((state) => state.subscription);
  const { isFetching } = useSelector((state) => state.student);

  async function handleSubmit() {
    try {
      await dispatch(
        createCreditCardSubscription({
          value: quotationCost!,
          creditCardId: creditCard!.id,
        }),
      );

      await dispatch(getStudent());

      navigation.navigate('history');
    } catch (error) {
      Alert.alert('Erro ao criar assinatura', `${error}`);
    }
  }

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
        {creditCard ? (
          <>
            <S.PaymentMethodChosenButton>
              <S.PaymentInfoContainer>
                <CardIcon flag={creditCard.brand as CreditCardBrand} />
                <S.PaymentTextContainer>
                  <S.PaymentTitle>
                    {creditCard.name
                      ? creditCard.name
                      : capitalizeFirstLetter(creditCard.brand)}
                  </S.PaymentTitle>
                  <S.PaymentDescription>
                    Final {creditCard?.lastFourDigits}
                  </S.PaymentDescription>
                </S.PaymentTextContainer>
              </S.PaymentInfoContainer>
              <S.ChangeButton onPress={() => navigation.navigate('method')}>
                <PencilIcon />
              </S.ChangeButton>
            </S.PaymentMethodChosenButton>
          </>
        ) : (
          <>
            <S.PaymentMethodButton
              onPress={() => navigation.navigate('method')}
            >
              <CardsIcon />
              <S.PaymentMethodText>
                Escolher método de pagamento
              </S.PaymentMethodText>
            </S.PaymentMethodButton>
          </>
        )}

        <S.Subtotal>
          <S.BalanceText>Subtotal:</S.BalanceText>
          <S.BalanceText>
            {formatPrice(quotationCost ? quotationCost : 0, {
              showCurrency: false,
            })}
          </S.BalanceText>
        </S.Subtotal>
        <S.Discount>
          <S.BalanceText>Desconto:</S.BalanceText>
          <S.BalanceText>- 0,00</S.BalanceText>
        </S.Discount>
        <S.Total>
          <S.TotalText>Total:</S.TotalText>
          <S.TotalText>
            {formatPrice(quotationCost ? quotationCost : 0, {
              showCurrency: false,
            })}
          </S.TotalText>
        </S.Total>

        <NextButton
          disabled={!creditCard}
          isLoading={isCreating || isFetching}
          onPress={() => handleSubmit()}
        >
          Finalizar
        </NextButton>
      </S.ContentContainer>
    </S.Container>
  );
}

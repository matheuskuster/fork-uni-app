import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo } from 'react';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import { BrandIcon } from './BrandIcon';
import { HistoryShimmer } from './HistoryShimmer';
import { Method } from './Method';
import { Payments } from './Payments';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { store } from '@/app/store';
import { BackButton, PaymentStatusTag } from '@/components';
import { myCreditCards } from '@/features/billing/creditCardActions';
import { creditCardsSelectors } from '@/features/billing/creditCardSlice';
import { myCharges } from '@/features/charge/chargeActions';
import { chargesSelectors } from '@/features/charge/chargeSlice';
import { mySubscription } from '@/features/subscription/subscriptionActions';
import { CalendarIcon } from '@/icons/CalendarIcon';
import { DollarSign } from '@/icons/DollarSign';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { formatPrice } from '@/utils/formatPrice';
import { getFormattedDate } from '@/utils/getFormattedDate';

export function History() {
  const theme = useTheme();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const dispatch = useDispatch();

  const { id, creditCard, value, nextDueDate, isFetching } = useSelector(
    (state) => state.subscription,
  );
  const { isLoadingCreditCards } = useSelector((state) => state.creditCard);
  const { isLoadingCharges } = useSelector((state) => state.charge);
  const { paymentStatus } = useSelector((state) => state.student);

  const payments = useSelector(chargesSelectors.selectAll);

  useEffect(() => {
    if (!id) {
      try {
        dispatch(mySubscription());
      } catch (error) {
        Alert.alert('Erro ao buscar assinatura', `${error}`);
      }
    }
  }, [id, creditCard]);

  useEffect(() => {
    try {
      handleHistory();
    } catch (error) {
      Alert.alert('Erro ao buscar histórico', `${error}`);
    }
  }, []);

  async function handleHistory() {
    await dispatch(myCreditCards());
    await dispatch(myCharges());
  }

  function getCardName(id: string) {
    const card = creditCardsSelectors.selectById(store.getState(), id);

    if (card) {
      return card.name ? card.name : `Cartão final ${card.lastFourDigits}`;
    } else {
      return 'Cartão removido';
    }
  }

  function sortByDate() {
    const paidPayments = payments.filter((payment) => payment.paidAt !== null);

    if (paidPayments.length > 0) {
      const sortedArray = paidPayments.sort((a, b) => {
        if (a.paidAt! > b.paidAt!) {
          return -1;
        }
        if (a.paidAt! < b.paidAt!) {
          return 1;
        }
        return 0;
      });

      return sortedArray;
    }
  }

  const paymentsSorted = useMemo(sortByDate, [payments]);

  const formattedNextDueDate = useMemo(() => {
    if (nextDueDate) {
      const previousMonthDate = new Date(nextDueDate);
      previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);

      return {
        dayDueDate: getFormattedDate({ date: nextDueDate }).day,
        previousMonth: getFormattedDate({ date: previousMonthDate }).month,
      };
    } else {
      return {
        dayDueDate: getFormattedDate({}).day,
        previousMonth: getFormattedDate({}).month,
      };
    }
  }, [nextDueDate]);

  const formattedValue = useMemo(() => {
    if (value) {
      return formatPrice(value, { showCurrency: true });
    } else {
      return 'R$ 0,00';
    }
  }, [value]);

  if (isFetching || isLoadingCharges || isLoadingCreditCards || !id) {
    return <HistoryShimmer isVisible={false} />;
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.HeaderContainer>
          <BackButton
            containerStyle={{
              backgroundColor: `${theme.colors.gray[750]}`,
              position: 'absolute',
              left: theme.spacing[4],
              top: theme.spacing[4],
            }}
            onPress={() => navigation.navigate('home')}
          />
          <S.HeaderTitle>Pagamento</S.HeaderTitle>

          <S.PaymentContainer>
            <S.IconContainer>
              <DollarSign size={24} />
            </S.IconContainer>
            <S.StatusContainer>
              <PaymentStatusTag paymentStatus={paymentStatus} />
              <S.DateText>
                {capitalizeFirstLetter(formattedNextDueDate!.previousMonth)}
              </S.DateText>
            </S.StatusContainer>
          </S.PaymentContainer>
        </S.HeaderContainer>

        <S.Content>
          <Method
            icon={<BrandIcon brand={creditCard?.brand ?? null} size={32} />}
            description={
              creditCard?.name
                ? `${creditCard!.name} (final ${creditCard!.lastFourDigits})`
                : `Cartão final ${creditCard?.lastFourDigits}`
            }
          />

          <S.CategoryContainer>
            <S.Title>VENCIMENTO</S.Title>
            <S.DescriptionContainer>
              <CalendarIcon />
              <S.DescriptionText>
                Todo dia {formattedNextDueDate?.dayDueDate ?? '5'}
              </S.DescriptionText>
            </S.DescriptionContainer>
          </S.CategoryContainer>

          <S.CategoryContainer>
            <S.Title>VALOR</S.Title>
            <S.DescriptionContainer>
              <CalendarIcon />
              <S.DescriptionText>{formattedValue}</S.DescriptionText>
            </S.DescriptionContainer>
          </S.CategoryContainer>

          <S.HistoryContainer>
            <S.Title>HISTÓRICO</S.Title>
            <FlatList
              data={paymentsSorted}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Payments
                  description={getCardName(item.creditCardId)}
                  amount={item.amount}
                  date={item.paidAt ?? new Date()}
                />
              )}
              scrollEnabled={false}
            />
          </S.HistoryContainer>
        </S.Content>
      </S.Container>
    </S.SafeArea>
  );
}

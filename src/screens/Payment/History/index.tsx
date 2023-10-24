import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import { BrandIcon } from './BrandIcon';
import { HistoryShimmer } from './HistoryShimmer';
import { Method } from './Method';
import { Payments } from './Payments';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, PaymentStatusTag } from '@/components';
import { mySubscription } from '@/features/subscription/subscriptionActions';
import { CalendarIcon } from '@/icons/CalendarIcon';
import { DollarSign } from '@/icons/DollarSign';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { formatPrice } from '@/utils/formatPrice';
import { getFormattedDate } from '@/utils/getFormattedDate';

// just for testing
const paymentsTest = [
  {
    status: 'Pagamento concluído',
    description: 'Crédito final 0000',
    date: new Date('2023-03-09T03:25:00'),
  },
  {
    status: 'Pagamento concluído',
    description: 'Crédito final 0000',
    date: new Date('2023-02-09T03:24:00'),
  },
  {
    status: 'Pagamento concluído',
    description: 'Crédito final 0000',
    date: new Date('2023-04-09T03:24:00'),
  },
  {
    status: 'Pagamento concluído',
    description: 'Crédito final 0000',
    date: new Date('2022-10-09T03:24:00'),
  },
  {
    status: 'Pagamento concluído',
    description: 'Crédito final 0000',
    date: new Date('2022-11-09T03:24:00'),
  },
];

export function History() {
  const theme = useTheme();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const dispatch = useDispatch();

  const { id, creditCard, value, nextDueDate, isFetching } = useSelector(
    (state) => state.subscription,
  );
  const { paymentStatus } = useSelector((state) => state.student);

  useEffect(() => {
    if (!id) {
      dispatch(mySubscription());
    }
  }, [id, creditCard]);

  const [payments, setPayments] = useState(paymentsTest);

  const sortByDate = () => {
    const sortedArray = payments.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }
      return 0;
    });

    return sortedArray;
  };

  const paymentsSorted = useMemo(sortByDate, [payments]);

  const formattedNextDueDate = useMemo(() => {
    if (nextDueDate) {
      const previousMonthDate = new Date(
        nextDueDate.setMonth(nextDueDate.getMonth() - 1),
      );

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

  if (isFetching) {
    return <HistoryShimmer isVisible={!isFetching} />;
  }

  return (
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

      <S.ContentContainer>
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
            keyExtractor={(item) => `${item.date}`}
            renderItem={({ item }) => (
              <Payments
                title={item.status}
                description={item.description}
                date={item.date}
              />
            )}
            scrollEnabled={false}
          />
        </S.HistoryContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

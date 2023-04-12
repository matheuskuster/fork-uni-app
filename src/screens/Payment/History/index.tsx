import { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import { Method } from './Method';
import { Payments } from './Payments';
import * as S from './styles';

import { BackButton } from '@/components';
import { CalendarIcon } from '@/icons/CalendarIcon';
import { DollarSign } from '@/icons/DollarSign';
import { MastercardIcon } from '@/icons/MastercardIcon';

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
        />
        <S.HeaderTitle>Pagamento</S.HeaderTitle>

        <S.PaymentContainer>
          <S.IconContainer>
            <DollarSign size={24} />
          </S.IconContainer>
          <S.StatusContainer>
            <S.StatusTag>PAGO</S.StatusTag>
            <S.DateText>Março</S.DateText>
          </S.StatusContainer>
        </S.PaymentContainer>
      </S.HeaderContainer>

      <S.ContentContainer>
        <Method
          icon={<MastercardIcon size={32} />}
          description="Cartão final 0000"
        />

        <S.CategoryContainer>
          <S.Title>VENCIMENTO</S.Title>
          <S.DescriptionContainer>
            <CalendarIcon />
            <S.DescriptionText>Todo dia 09</S.DescriptionText>
          </S.DescriptionContainer>
        </S.CategoryContainer>

        <S.CategoryContainer>
          <S.Title>VALOR</S.Title>
          <S.DescriptionContainer>
            <CalendarIcon />
            <S.DescriptionText>R$ 140,00</S.DescriptionText>
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

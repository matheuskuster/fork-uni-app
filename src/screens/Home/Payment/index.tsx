import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useSelector } from '@/app/hooks';
import {
  StudentPaymentStatusProps,
  StudentStatusProps,
} from '@/features/student/studentSlice';
import { DollarSign } from '@/icons/DollarSign';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { getFormattedDate } from '@/utils/getFormattedDate';
export function Payment() {
  const theme = useTheme();
  const { paymentStatus, status } = useSelector((state) => state.student);

  const isVisible = useMemo(
    () =>
      status === StudentStatusProps.ACTIVE ||
      status === StudentStatusProps.INACTIVE,
    [status],
  );

  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  if (!isVisible) {
    return (
      <S.PaymentContainer>
        <ShimmerPlaceHolder
          style={{
            borderRadius: theme.spacing[1],
            width: theme.spacing[12],
            height: theme.spacing[12],
          }}
          shimmerColors={linearGradientColors}
          visible={isVisible}
        />
        <ShimmerPlaceHolder
          style={{
            borderRadius: theme.spacing[1],
            width: theme.spacing[40],
            marginLeft: theme.spacing[4],
            height: theme.spacing[10],
          }}
          shimmerColors={linearGradientColors}
          visible={isVisible}
        />
      </S.PaymentContainer>
    );
  }

  return (
    <S.PaymentContainer>
      <S.IconContainer>
        <DollarSign />
      </S.IconContainer>
      <S.StatusBox>
        <S.StatusText>STATUS</S.StatusText>
        <S.DescriptionBox>
          {paymentStatus === StudentPaymentStatusProps.PAID ? (
            <S.PaidStatusTag>PAGO</S.PaidStatusTag>
          ) : (
            <S.PendingStatusTag>PENDENTE</S.PendingStatusTag>
          )}
          <S.StatusDate>
            {capitalizeFirstLetter(getFormattedDate({}).month)}
          </S.StatusDate>
        </S.DescriptionBox>
      </S.StatusBox>
    </S.PaymentContainer>
  );
}

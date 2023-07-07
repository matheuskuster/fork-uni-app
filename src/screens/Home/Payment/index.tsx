import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

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
  const { paymentStatus, status } = useSelector((state) => state.student);

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const isVisible = useMemo(
    () =>
      status === StudentStatusProps.ACTIVE ||
      status === StudentStatusProps.INACTIVE,
    [status],
  );

  return (
    <ShimmerPlaceHolder style={{ height: 'auto' }} visible={isVisible}>
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
    </ShimmerPlaceHolder>
  );
}

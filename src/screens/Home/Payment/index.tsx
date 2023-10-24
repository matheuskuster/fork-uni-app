import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useSelector } from '@/app/hooks';
import { PaymentStatusTag } from '@/components';
import { StudentStatusProps } from '@/features/student/studentSlice';
import { DollarSign } from '@/icons/DollarSign';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { getFormattedDate } from '@/utils/getFormattedDate';

export function Payment() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

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
    <S.PaymentContainer
      onPress={() => navigation.navigate('paymentRoute', { screen: 'history' })}
    >
      <S.IconContainer>
        <DollarSign />
      </S.IconContainer>
      <S.StatusBox>
        <S.StatusText>STATUS</S.StatusText>
        <S.DescriptionBox>
          <PaymentStatusTag paymentStatus={paymentStatus} />
          <S.StatusDate>
            {capitalizeFirstLetter(getFormattedDate({}).month)}
          </S.StatusDate>
        </S.DescriptionBox>
      </S.StatusBox>
    </S.PaymentContainer>
  );
}

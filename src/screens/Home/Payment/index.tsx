import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { DollarSign } from '@/icons/DollarSign';

export function Payment() {
  const theme = useTheme();

  // Animation to the Shimmer Placeholder
  const [visible, setVisible] = useState(true);
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  return (
    <ShimmerPlaceHolder
      style={{
        borderRadius: theme.spacing[1],
        height: '100%',
      }}
      shimmerColors={linearGradientColors}
      visible={visible}
    >
      <S.PaymentContainer>
        <S.IconContainer>
          <DollarSign />
        </S.IconContainer>
        <S.StatusBox>
          <S.StatusText>STATUS</S.StatusText>
          <S.DescriptionBox>
            <S.PaidStatusTag>PAGO</S.PaidStatusTag>
            <S.StatusDate>Março</S.StatusDate>
          </S.DescriptionBox>
        </S.StatusBox>
      </S.PaymentContainer>
    </ShimmerPlaceHolder>
  );
}

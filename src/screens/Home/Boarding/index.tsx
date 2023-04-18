import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface BoardingProps {
  isConfirmed?: boolean;
}

export function Boarding({ isConfirmed = false }: BoardingProps) {
  const theme = useTheme();

  // Animation to the Shimmer Placeholder
  const [visible, setVisible] = useState(true);
  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  // TODO: Refactor this code to a better way to use the Shimmer Placeholder
  const statusRef = useRef<any>();
  const dateRef = useRef<any>();
  const buttonRef = useRef<any>();

  useEffect(() => {
    const boardingAnimated = Animated.stagger(900, [
      statusRef.current?.getAnimated(),
      Animated.parallel([
        dateRef.current?.getAnimated(),
        buttonRef.current?.getAnimated(),
      ]),
    ]);
    Animated.loop(boardingAnimated).start();
  }, []);

  return (
    <S.BoardingContainer>
      <ShimmerPlaceHolder
        style={{
          borderRadius: theme.spacing[1],
          width: '40%',
          height: theme.spacing[6],
        }}
        shimmerColors={linearGradientColors}
        stopAutoRun
        ref={statusRef}
        visible={visible}
      >
        {isConfirmed ? (
          <S.Confirmed>CONFIRMADO</S.Confirmed>
        ) : (
          <S.Unconfirmed>FORA DA ROTA</S.Unconfirmed>
        )}
      </ShimmerPlaceHolder>

      <ShimmerPlaceHolder
        style={{
          borderRadius: theme.spacing[1],
          width: '60%',
          height: theme.spacing[16],
        }}
        shimmerColors={linearGradientColors}
        stopAutoRun
        ref={dateRef}
        visible={visible}
      >
        <S.DateContainer>
          <S.WeekText>TERÇA-FEIRA</S.WeekText>
          <S.DateText>14 de Março</S.DateText>
        </S.DateContainer>
      </ShimmerPlaceHolder>

      <ShimmerPlaceHolder
        style={{
          borderRadius: theme.spacing[1],
          width: '100%',
          height: theme.spacing[12],
        }}
        shimmerColors={linearGradientColors}
        stopAutoRun
        ref={buttonRef}
        visible={visible}
      >
        <S.ButtonBox isConfirmed={isConfirmed}>
          <S.ButtonText isConfirmed={isConfirmed}>
            {isConfirmed ? 'NÃO VOU EMBARCAR' : 'CONFIRMAR EMBARQUE'}
          </S.ButtonText>
        </S.ButtonBox>
      </ShimmerPlaceHolder>
    </S.BoardingContainer>
  );
}

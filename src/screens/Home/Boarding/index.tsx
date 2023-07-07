import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { ConfirmationModal } from '../ConfirmationModal';

import { useDispatch, useSelector } from '@/app/hooks';
import { getNoBoarding } from '@/features/student/studentActions';
import { StudentStatusProps } from '@/features/student/studentSlice';

export function Boarding() {
  const theme = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  const { isLoadingBoarding, noBoardingId, status } = useSelector(
    (state) => state.student,
  );

  const isConfirmed = useMemo(() => !noBoardingId, [noBoardingId]);
  const isVisible = useMemo(
    () =>
      status === StudentStatusProps.ACTIVE ||
      status === StudentStatusProps.INACTIVE ||
      isLoadingBoarding,
    [status, isLoadingBoarding],
  );

  // Animation to the Shimmer Placeholder
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

  useEffect(() => {
    dispatch(getNoBoarding());
  }, [status]);

  return (
    <S.BoardingContainer>
      <ConfirmationModal
        visible={isModalVisible}
        setVisible={setIsModalVisible}
      />

      <ShimmerPlaceHolder
        style={{
          borderRadius: theme.spacing[1],
          width: '40%',
          height: theme.spacing[6],
        }}
        shimmerColors={linearGradientColors}
        stopAutoRun
        ref={statusRef}
        visible={isVisible}
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
        visible={isVisible}
      >
        <S.DateContainer>
          <S.WeekText>TERÇA-FEIRA</S.WeekText>
          <S.DateText>15 de Julho</S.DateText>
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
        visible={isVisible}
      >
        <S.ButtonBox
          isConfirmed={isConfirmed}
          onPress={() => setIsModalVisible(true)}
        >
          <S.ButtonText isConfirmed={isConfirmed}>
            {isConfirmed ? 'NÃO VOU EMBARCAR' : 'CONFIRMAR EMBARQUE'}
          </S.ButtonText>
        </S.ButtonBox>
      </ShimmerPlaceHolder>
    </S.BoardingContainer>
  );
}

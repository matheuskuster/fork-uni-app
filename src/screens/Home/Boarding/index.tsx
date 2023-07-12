import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const { noBoardingId, isLoadingBoarding, status, isCreating } = useSelector(
    (state) => state.student,
  );

  const isConfirmed = useMemo(() => !noBoardingId, [noBoardingId]);

  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  useEffect(() => {
    if (
      status === StudentStatusProps.INACTIVE ||
      status === StudentStatusProps.ACTIVE ||
      isLoadingBoarding === false
    ) {
      setIsVisible(true);
    }
  }, [isCreating, isLoadingBoarding]);

  useEffect(() => {
    dispatch(getNoBoarding());
  }, [status]);

  if (!isVisible) {
    return (
      <S.BoardingContainer>
        <ShimmerPlaceHolder
          style={{
            borderRadius: theme.spacing[1],
            width: '40%',
            height: theme.spacing[6],
          }}
          shimmerColors={linearGradientColors}
          visible={isVisible}
        />

        <ShimmerPlaceHolder
          style={{
            borderRadius: theme.spacing[1],
            width: '60%',
            height: theme.spacing[16],
          }}
          shimmerColors={linearGradientColors}
          visible={isVisible}
        />

        <ShimmerPlaceHolder
          style={{
            borderRadius: theme.spacing[1],
            width: '100%',
            height: theme.spacing[12],
          }}
          shimmerColors={linearGradientColors}
          visible={isVisible}
        />
      </S.BoardingContainer>
    );
  }

  return (
    <S.BoardingContainer>
      <ConfirmationModal
        visible={isModalVisible}
        setVisible={setIsModalVisible}
      />

      {isConfirmed ? (
        <S.Confirmed>CONFIRMADO</S.Confirmed>
      ) : (
        <S.Unconfirmed>FORA DA ROTA</S.Unconfirmed>
      )}

      <S.DateContainer>
        <S.WeekText>TERÇA-FEIRA</S.WeekText>
        <S.DateText>15 de Julho</S.DateText>
      </S.DateContainer>

      <S.ButtonBox
        isConfirmed={isConfirmed}
        onPress={() => setIsModalVisible(true)}
      >
        <S.ButtonText isConfirmed={isConfirmed}>
          {isConfirmed ? 'NÃO VOU EMBARCAR' : 'CONFIRMAR EMBARQUE'}
        </S.ButtonText>
      </S.ButtonBox>
    </S.BoardingContainer>
  );
}

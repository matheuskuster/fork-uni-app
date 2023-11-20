import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { ConfirmationModal } from '../ConfirmationModal';

import { useSelector } from '@/app/hooks';
import { Space } from '@/components';
import { StudentStatusProps } from '@/features/student/studentSlice';
import { getFormattedNextBoardingDate } from '@/utils/getFormattedNextBoardingDate';

export function Boarding() {
  const theme = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { noBoardingId, isLoadingBoarding, status } = useSelector(
    (state) => state.student,
  );
  const { isSearchingRoute, recurrence, goingHour, returningHour } =
    useSelector((state) => state.route);
  const { isSearchingDriver } = useSelector((state) => state.driver);

  const isConfirmed = useMemo(() => !noBoardingId, [noBoardingId]);

  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const isVisible = useMemo(
    () =>
      (status === StudentStatusProps.ACTIVE ||
        status === StudentStatusProps.INACTIVE) &&
      !isSearchingDriver &&
      !isSearchingRoute &&
      !isLoadingBoarding,
    [status, isSearchingDriver, isSearchingRoute, isLoadingBoarding],
  );

  const formattedDate = useMemo(() => {
    if (recurrence) {
      return getFormattedNextBoardingDate(recurrence.next);
    }
  }, [recurrence]);

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

      <Space size={theme.spacing[1.5]} />

      <S.DateContainer>
        <S.WeekText>{formattedDate?.nextWeekDay}</S.WeekText>
        <S.DateText>{formattedDate?.nextDateFormatted}</S.DateText>
        <S.HourText>
          {goingHour?.start} - {returningHour?.end}
        </S.HourText>
      </S.DateContainer>

      <Space size={theme.spacing[2]} />

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

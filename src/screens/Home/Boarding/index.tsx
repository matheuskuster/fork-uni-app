import 'dayjs/locale/pt-br';
import 'dayjs/plugin/isToday';

import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState } from 'react';
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
  const [isAllowedChangeBoard, setIsAllowedChangeBoard] = useState(false);
  const [isTripStarted, setisTripStarted] = useState(false);

  const { noBoardingId, isLoadingBoarding, status } = useSelector(
    (state) => state.student,
  );
  const { isSearchingRoute, next, goingHour, returningHour } = useSelector(
    (state) => state.route,
  );
  const { isSearchingDriver } = useSelector((state) => state.driver);

  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const isConfirmed = useMemo(() => !noBoardingId, [noBoardingId]);

  const goingDateTime = useMemo(() => {
    if (goingHour) {
      const goingHourStart = Number(goingHour.start.split(':')[0]);
      const goingMinutesStart = Number(goingHour.start.split(':')[1]);

      const goingTime = dayjs(next)
        .utc()
        .hour(goingHourStart)
        .minute(goingMinutesStart);

      return goingTime;
    }

    return null;
  }, [goingHour, next]);

  const isVisible = useMemo(
    () =>
      (status === StudentStatusProps.ACTIVE ||
        status === StudentStatusProps.INACTIVE) &&
      !isSearchingDriver &&
      !isSearchingRoute &&
      !isLoadingBoarding,
    [status, isSearchingDriver, isSearchingRoute, isLoadingBoarding],
  );

  const boardingText = useMemo(() => {
    if (isTripStarted) {
      return 'VIAGEM EM ANDAMENTO';
    }

    if (isConfirmed) {
      return 'NÃO VOU EMBARCAR';
    }

    return 'CONFIRMAR EMBARQUE';
  }, [isTripStarted, isConfirmed]);

  const formattedDate = useMemo(() => {
    if (next) {
      return getFormattedNextBoardingDate(next);
    }
  }, [next]);

  useEffect(() => {
    if (goingDateTime) {
      // TODO: change dayjs to use UTC-3 and remove the subtract 3 below
      const now = dayjs().subtract(3, 'hour');

      if (now.isAfter(goingDateTime.subtract(8, 'hour'))) {
        setIsAllowedChangeBoard(false);
      } else {
        setIsAllowedChangeBoard(true);
      }

      if (now.isAfter(goingDateTime)) {
        setisTripStarted(true);
      } else {
        setisTripStarted(false);
      }
    }
  }, [goingDateTime]);

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
        nextFormatted={formattedDate?.nextDateFormatted}
        goingDateTime={goingDateTime}
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
        disabled={!isAllowedChangeBoard}
        onPress={() => setIsModalVisible(true)}
      >
        <S.ButtonText isConfirmed={isConfirmed}>{boardingText}</S.ButtonText>
      </S.ButtonBox>
    </S.BoardingContainer>
  );
}

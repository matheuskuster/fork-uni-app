import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import {
  createNoBoarding,
  deleteNoBoarding,
} from '@/features/student/studentActions';
import { SmileyIcon } from '@/icons/SmileyIcon';
import { WarningCircleIcon } from '@/icons/WarningCircleIcon';

interface ConfirmationModalProps {
  visible: boolean;
  nextFormatted: string | undefined;
  goingDateTime: dayjs.Dayjs | null;
  setVisible: (visible: boolean) => void;
}

export function ConfirmationModal({
  visible,
  nextFormatted,
  goingDateTime,
  setVisible,
}: ConfirmationModalProps) {
  const dispatch = useDispatch();
  const { id, isBoarding, noBoardingId, isLoadingBoarding } = useSelector(
    (state) => state.student,
  );

  const confirmationTimeLimit = useMemo(() => {
    if (goingDateTime) {
      const dateTimeLimit = goingDateTime.subtract(8, 'hour');

      return `${dateTimeLimit.format('HH:mm')} do dia ${dateTimeLimit.format(
        'DD/MM',
      )}`;
    }

    return null;
  }, [goingDateTime]);

  const isConfirmed = useMemo(() => isBoarding, [isBoarding]);

  async function confirmBoarding() {
    if (!noBoardingId) return;

    try {
      await dispatch(deleteNoBoarding({ noBoardingId }));
    } catch (error) {
      Alert.alert('Não conseguimos confirmar', `${error}`);
    } finally {
      setVisible(false);
    }
  }

  async function notBoarding() {
    if (!id) return;

    try {
      await dispatch(createNoBoarding({ studentId: id }));
    } catch (error) {
      Alert.alert('Não conseguimos confirmar', `${error}`);
    } finally {
      setVisible(false);
    }
  }

  return !isConfirmed ? (
    <S.ModalContainer animationType="fade" transparent visible={visible}>
      <S.ContentContainer>
        <SmileyIcon />
        <S.Title>Pronto para embarcar?</S.Title>
        <S.Description>
          Você está confirmando sua presença no{' '}
          <S.HighLight>dia {nextFormatted}</S.HighLight>. Caso mude de ideia
          poderá alterar até às {confirmationTimeLimit}.
        </S.Description>
        <S.ButtonOptionsContainer>
          <S.BackButton onPress={() => setVisible(false)}>
            <S.BackButtonText>Voltar</S.BackButtonText>
          </S.BackButton>
          <S.ConfirmButton onPress={confirmBoarding}>
            {isLoadingBoarding ? (
              <ActivityIndicator />
            ) : (
              <S.ConfirmButtonText>Confirmar</S.ConfirmButtonText>
            )}
          </S.ConfirmButton>
        </S.ButtonOptionsContainer>
      </S.ContentContainer>
    </S.ModalContainer>
  ) : (
    <S.ModalContainer animationType="fade" transparent visible={visible}>
      <S.ContentContainer>
        <WarningCircleIcon />
        <S.Title>Tem certeza?</S.Title>
        <S.Description>
          Ao fazer isso você <S.HighLight>sairá da rota do </S.HighLight>
          <S.HighLight>dia {nextFormatted}</S.HighLight>. Caso mude de ideia
          poderá alterar até às {confirmationTimeLimit}.
        </S.Description>
        <S.ButtonOptionsContainer>
          <S.BackButton onPress={() => setVisible(false)}>
            <S.BackButtonText>Voltar</S.BackButtonText>
          </S.BackButton>
          <S.ConfirmButton onPress={notBoarding}>
            {isLoadingBoarding ? (
              <ActivityIndicator />
            ) : (
              <S.ConfirmButtonText>Confirmar</S.ConfirmButtonText>
            )}
          </S.ConfirmButton>
        </S.ButtonOptionsContainer>
      </S.ContentContainer>
    </S.ModalContainer>
  );
}

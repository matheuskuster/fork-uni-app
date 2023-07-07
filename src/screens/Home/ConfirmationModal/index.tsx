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
  setVisible: (visible: boolean) => void;
}

export function ConfirmationModal({
  visible,
  setVisible,
}: ConfirmationModalProps) {
  const dispatch = useDispatch();
  const { id, isBoarding, noBoardingId, isLoadingBoarding } = useSelector(
    (state) => state.student,
  );
  const { recurrence } = useSelector((state) => state.route);

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
          <S.HighLight>dia {recurrence?.nextFormatted}</S.HighLight>. Caso mude
          de ideia poderá alterar até XX horas antes do início da rota.
        </S.Description>
        <S.ButtonOptionsContainer>
          <S.BackButton>
            <S.BackButtonText onPress={() => setVisible(false)}>
              Voltar
            </S.BackButtonText>
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
          Ao fazer isso{' '}
          <S.HighLight>
            você sairá da rota do dia {recurrence?.nextFormatted}
          </S.HighLight>
          . Caso mude de ideia poderá alterar até XX horas antes do início da
          rota.
        </S.Description>
        <S.ButtonOptionsContainer>
          <S.BackButton>
            <S.BackButtonText onPress={() => setVisible(false)}>
              Voltar
            </S.BackButtonText>
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

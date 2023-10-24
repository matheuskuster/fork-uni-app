import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Alert } from 'react-native';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { changeCard } from '@/features/subscription/subscriptionActions';
import { WarningCircleIcon } from '@/icons/WarningCircleIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';

interface CardChangeModalProps {
  cardId: string | null;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export function CardChangeModal({
  visible,
  setVisible,
  cardId,
}: CardChangeModalProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();

  const { id, isCreating } = useSelector((state) => state.subscription);

  async function handleConfirmation() {
    try {
      if (id && cardId) {
        await dispatch(
          changeCard({ subscriptionId: id, creditCardId: cardId }),
        );
      }
    } catch (error) {
      Alert.alert('Não conseguimos confirmar', `${error}`);
    } finally {
      setVisible(false);
      navigation.goBack();
    }
  }

  return (
    <S.ModalContainer animationType="fade" transparent visible={visible}>
      <S.ContentContainer>
        <WarningCircleIcon />
        <S.Title>Alterar seu cartão?</S.Title>
        <S.Description>
          Ao confirmar, o cartão da sua assinatura será alterado e o pagamento
          da sua próxima mensalidade será realizada{' '}
          <S.HighLight>1 dia antes</S.HighLight> do vencimento.
        </S.Description>
        <S.ButtonOptionsContainer>
          <S.BackButton>
            <S.BackButtonText onPress={() => setVisible(false)}>
              Voltar
            </S.BackButtonText>
          </S.BackButton>
          <S.ConfirmButton onPress={handleConfirmation}>
            {isCreating ? (
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

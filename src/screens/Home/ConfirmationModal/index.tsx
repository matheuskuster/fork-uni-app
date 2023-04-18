import * as S from './styles';

import { SmileyIcon } from '@/icons/SmileyIcon';
import { WarningCircleIcon } from '@/icons/WarningCircleIcon';

interface ConfirmationModalProps {
  isConfirmBoarding?: boolean;
  visible?: boolean;
}

export function ConfirmationModal({
  isConfirmBoarding = false,
  visible = false,
}: ConfirmationModalProps) {
  return isConfirmBoarding ? (
    <S.ModalContainer animationType="fade" transparent visible={visible}>
      <S.ContentContainer>
        <SmileyIcon />
        <S.Title>Pronto para embarcar?</S.Title>
        <S.Description>
          Você está confirmando sua presença no{' '}
          <S.HighLight>dia 14 de Março</S.HighLight>. Caso mude de ideia poderá
          alterar até XX horas antes do início da rota.
        </S.Description>
        <S.ButtonOptionsContainer>
          <S.BackButton>
            <S.BackButtonText>Voltar</S.BackButtonText>
          </S.BackButton>
          <S.ConfirmButton>
            <S.ConfirmButtonText>Confirmar</S.ConfirmButtonText>
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
          <S.HighLight>você sairá da rota do dia 14 de Março</S.HighLight>. Caso
          mude de ideia poderá alterar até XX horas antes do início da rota.
        </S.Description>
        <S.ButtonOptionsContainer>
          <S.BackButton>
            <S.BackButtonText>Voltar</S.BackButtonText>
          </S.BackButton>
          <S.ConfirmButton>
            <S.ConfirmButtonText>Confirmar</S.ConfirmButtonText>
          </S.ConfirmButton>
        </S.ButtonOptionsContainer>
      </S.ContentContainer>
    </S.ModalContainer>
  );
}

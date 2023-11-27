import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { Button } from '@/components';
import { CheckIcon } from '@/icons/CheckIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';

export function PaymentConfirmation() {
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();

  return (
    <>
      <S.Container>
        <S.ContentContainer>
          <CheckIcon />
          <S.Title>Pagamento Aprovado</S.Title>
          <S.SimpleText>Seu pagamento foi realizado com sucesso!</S.SimpleText>
          <S.SimpleText>Pronto para embarcar?</S.SimpleText>
        </S.ContentContainer>
      </S.Container>

      <S.Footer>
        <Button onPress={() => navigation.navigate('history')}>Embarcar</Button>
      </S.Footer>
    </>
  );
}

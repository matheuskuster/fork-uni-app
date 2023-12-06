import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import * as S from './styles';

import { Button } from '@/components';
import { CheckIcon } from '@/icons/CheckIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';

export function PaymentConfirmation() {
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();

  const handleSubmit = () => {
    navigation.navigate('history');
  };

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
        <Button onPress={handleSubmit}>Embarcar</Button>
      </S.Footer>
    </>
  );
}

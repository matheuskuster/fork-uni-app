import { useNavigation } from '@react-navigation/native';
import React from 'react';

import * as S from './styles';

import { PencilIcon } from '@/icons/PencilIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';

interface MethodProps {
  icon: React.ReactNode;
  description: string;
}

export function Method({ icon, description }: MethodProps) {
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();

  return (
    <S.Container>
      <S.MethodContainer>
        <S.Title>MÉTODO</S.Title>
        <S.PickedMethodContainer>
          {icon}
          <S.Description>{description}</S.Description>
        </S.PickedMethodContainer>
      </S.MethodContainer>
      <S.ChangeButton onPress={() => navigation.navigate('method')}>
        <PencilIcon />
      </S.ChangeButton>
    </S.Container>
  );
}

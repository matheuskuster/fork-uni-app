import * as S from './styles';

import { DollarSign } from '@/icons/DollarSign';

export function Payment() {
  return (
    <S.PaymentContainer>
      <S.IconContainer>
        <DollarSign />
      </S.IconContainer>
      <S.StatusBox>
        <S.StatusText>STATUS</S.StatusText>
        <S.DescriptionBox>
          <S.StatusTag>PAGO</S.StatusTag>
          <S.StatusDate>Março</S.StatusDate>
        </S.DescriptionBox>
      </S.StatusBox>
    </S.PaymentContainer>
  );
}

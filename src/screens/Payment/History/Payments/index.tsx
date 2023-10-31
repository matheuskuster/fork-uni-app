import * as S from './styles';

import { formatPrice } from '@/utils/formatPrice';

interface PaymentsProps {
  description: string;
  amount: number;
  date: Date;
}

export function Payments({ description, amount, date }: PaymentsProps) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Pagamento confirmado</S.Title>
        <S.DateText>{date.toLocaleDateString('pt-BR')}</S.DateText>
      </S.Header>
      <S.DescriptionContainer>
        <S.Description>{description}</S.Description>
        <S.Description>{formatPrice(amount)}</S.Description>
      </S.DescriptionContainer>
    </S.Container>
  );
}

import * as S from './styles';

import { StudentPaymentStatusProps } from '@/features/student/studentSlice';

interface PaymentStatusTagProps {
  paymentStatus: StudentPaymentStatusProps | null;
}

export function PaymentStatusTag({ paymentStatus }: PaymentStatusTagProps) {
  switch (paymentStatus) {
    case StudentPaymentStatusProps.PAID:
      return <S.Container isPaid>PAGO</S.Container>;
    case StudentPaymentStatusProps.PENDING:
      return <S.Container isPaid={false}>PENDENTE</S.Container>;
    default:
      return null;
  }
}

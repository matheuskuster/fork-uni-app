import * as S from './styles';

import { CreditCardBrand } from '@/features/billing/creditCardSlice';
import { AmexIcon } from '@/icons/AmexIcon';
import { EloIcon } from '@/icons/EloIcon';
import { MastercardIcon } from '@/icons/MastercardIcon';
import { VisaIcon } from '@/icons/VisaIcon';

interface CardIconProps {
  flag: CreditCardBrand;
}

export function CardIcon({ flag }: CardIconProps) {
  switch (flag) {
    case CreditCardBrand.ELO:
      return (
        <S.EloContainer>
          <EloIcon />
        </S.EloContainer>
      );
    case CreditCardBrand.VISA:
      return (
        <S.VisaContainer>
          <VisaIcon />
        </S.VisaContainer>
      );
    case CreditCardBrand.MASTERCARD:
      return (
        <S.MastercardContainer>
          <MastercardIcon />
        </S.MastercardContainer>
      );
    case CreditCardBrand.AMEX:
      return (
        <S.AmexContainer>
          <AmexIcon />
        </S.AmexContainer>
      );
  }
}

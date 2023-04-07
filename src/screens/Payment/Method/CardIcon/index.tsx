import * as S from './styles';

import { EloIcon } from '@/icons/EloIcon';
import { MastercardIcon } from '@/icons/MastercardIcon';
import { VisaIcon } from '@/icons/VisaIcon';

interface CardIconProps {
  flag: 'elo' | 'visa' | 'master';
}

export function CardIcon({ flag }: CardIconProps) {
  switch (flag) {
    case 'elo':
      return (
        <S.EloContainer>
          <EloIcon />
        </S.EloContainer>
      );
    case 'visa':
      return (
        <S.VisaContainer>
          <VisaIcon />
        </S.VisaContainer>
      );
    case 'master':
      return (
        <S.MastercardContainer>
          <MastercardIcon />
        </S.MastercardContainer>
      );
  }
}

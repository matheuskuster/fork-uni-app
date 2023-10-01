import { AmexIcon } from '@/icons/AmexIcon';
import { CardsIcon } from '@/icons/CardsIcon';
import { EloIcon } from '@/icons/EloIcon';
import { MastercardIcon } from '@/icons/MastercardIcon';
import { VisaIcon } from '@/icons/VisaIcon';

interface BrandIconProps {
  brand: string | null;
  size: number;
}

export function BrandIcon({ brand, size }: BrandIconProps) {
  switch (brand) {
    case 'VISA':
      return <VisaIcon size={size} />;
    case 'MASTERCARD':
      return <MastercardIcon size={size} />;
    case 'AMEX':
      return <AmexIcon size={size} />;
    case 'ELO':
      return <EloIcon size={size} />;
    default:
      return <CardsIcon size={size} />;
  }
}

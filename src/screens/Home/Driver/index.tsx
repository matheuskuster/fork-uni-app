import * as S from './styles';

import { DollarSign } from '@/icons/DollarSign';
import { VanIcon } from '@/icons/VanIcon';

interface DriverProps {
  status: 'searching' | 'confirmed' | 'found';
}
export function Driver({ status }: DriverProps) {
  switch (status) {
    case 'searching':
      return (
        <S.DriverContainer>
          <S.ImageContainer>
            <VanIcon />
          </S.ImageContainer>
          <S.DriverTextContainer>
            <S.DriverNameText>Seu motorista</S.DriverNameText>
            <S.DriverDescriptionText>
              ESTAMOS PROCURANDO A SUA VAN
            </S.DriverDescriptionText>
          </S.DriverTextContainer>
        </S.DriverContainer>
      );
    case 'found':
      return (
        <S.DriverContainer>
          <S.ImageContainer>
            <DollarSign />
          </S.ImageContainer>
          <S.DriverTextContainer>
            <S.DriverNameText>Encontramos!</S.DriverNameText>
            <S.DriverDescriptionText>
              CLIQUE AQUI E FINALIZE O PAGAMENTO
            </S.DriverDescriptionText>
          </S.DriverTextContainer>
        </S.DriverContainer>
      );
    case 'confirmed':
      return (
        <S.DriverContainer>
          <S.ImageContainer />
          <S.DriverTextContainer>
            <S.DriverNameText>Carlos da Silva</S.DriverNameText>
            <S.DriverDescriptionText>
              MOTORISTA E PARCEIRO
            </S.DriverDescriptionText>
          </S.DriverTextContainer>
        </S.DriverContainer>
      );
  }
}

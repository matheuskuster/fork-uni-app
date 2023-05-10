import * as S from './styles';

import { useSelector } from '@/app/hooks';
import { shiftTranslation } from '@/utils/constants/shiftTranslation';

export function Basemap() {
  const { home, university, shift } = useSelector((state) => state.student);

  return (
    <S.BasemapImage>
      <S.GradientContainer>
        <S.RouteTitle>ROTA:</S.RouteTitle>
        <S.RouteText>
          {home?.neighborhood} X {university?.acronym}
        </S.RouteText>
        {/* @ts-ignore */}
        <S.ShiftText>{shiftTranslation[shift]}</S.ShiftText>
      </S.GradientContainer>
    </S.BasemapImage>
  );
}

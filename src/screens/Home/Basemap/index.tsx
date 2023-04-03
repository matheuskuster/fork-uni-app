import * as S from './styles';

export function Basemap() {
  return (
    <S.BasemapImage>
      <S.GradientContainer>
        <S.RouteTitle>ROTA:</S.RouteTitle>
        <S.RouteText>Jardim Camburi X UVV</S.RouteText>
        <S.ShiftText>Matutino</S.ShiftText>
      </S.GradientContainer>
    </S.BasemapImage>
  );
}

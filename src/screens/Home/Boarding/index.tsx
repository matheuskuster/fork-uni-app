import * as S from './styles';

export function Boarding() {
  return (
    <S.BoardingContainer>
      <S.ConfirmationState>CONFIRMADO</S.ConfirmationState>
      <S.DateContainer>
        <S.WeekText>TERÇA-FEIRA</S.WeekText>
        <S.DateText>14 de Março</S.DateText>
      </S.DateContainer>
      <S.ButtonBox>
        <S.ButtonText>NÃO VOU EMBARCAR</S.ButtonText>
      </S.ButtonBox>
    </S.BoardingContainer>
  );
}

import * as S from './styles';

interface PaymentsProps {
  title: string;
  description: string;
  date: Date;
}

export function Payments({ title, description, date }: PaymentsProps) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.DateText>{date.toLocaleDateString('pt-BR')}</S.DateText>
      </S.Header>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}

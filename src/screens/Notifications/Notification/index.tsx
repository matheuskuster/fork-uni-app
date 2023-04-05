import * as S from './styles';

interface NotificationProps {
  title: string;
  date: Date;
  description: string;
  isRead?: boolean;
}

export function Notification({
  title,
  date,
  description,
  isRead = false,
}: NotificationProps) {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderDate>{date.toLocaleDateString('pt-BR')}</S.HeaderDate>
      </S.Header>

      <S.DescriptionContainer>
        <S.DescriptionText>{description}</S.DescriptionText>
        {!isRead && <S.DescriptionIsRead />}
      </S.DescriptionContainer>
    </S.Container>
  );
}

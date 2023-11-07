import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import { readNotification } from '@/features/notifications/notificationsActions';

interface NotificationProps {
  id: string;
  title: string;
  date: Date;
  description: string;
  isRead?: boolean;
}

export function Notification({
  id,
  title,
  date,
  description,
  isRead = false,
}: NotificationProps) {
  const dispatch = useDispatch();

  function handlePress() {
    if (!isRead) {
      dispatch(readNotification(id));
    }
  }

  return (
    <S.Container onPress={handlePress}>
      <S.Header>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderDate>{date.toLocaleDateString('pt-BR')}</S.HeaderDate>
      </S.Header>

      <S.DescriptionContainer>
        <S.DescriptionText>{description}</S.DescriptionText>
        {!isRead && <S.NotificationUnread />}
      </S.DescriptionContainer>
    </S.Container>
  );
}

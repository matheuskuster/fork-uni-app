import { PressableProps, ViewStyle } from 'react-native';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';
import { ChatIcon } from '@/icons/ChatIcon';

interface ChatButtonProps extends PressableProps {
  containerStyle?: ViewStyle;
}

export function ChatButton({ containerStyle, ...props }: ChatButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.4 });

  return (
    <S.Container style={{ opacity: press, ...containerStyle }}>
      <S.Button onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
        <ChatIcon />
      </S.Button>
    </S.Container>
  );
}

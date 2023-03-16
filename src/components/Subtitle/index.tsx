import { TextProps } from 'react-native';

import * as S from './styles';

interface SubtitleProps extends TextProps {
  color?: string;
  children: React.ReactNode;
}

export function Subtitle({ color, children, ...props }: SubtitleProps) {
  return (
    <S.Subtitle color={color} {...props}>
      {children}
    </S.Subtitle>
  );
}

import { TextProps } from 'react-native';

import * as S from './styles';

interface TitleProps extends TextProps {
  color?: string;
  children: React.ReactNode;
}

export function Title({ color, children, ...props }: TitleProps) {
  return (
    <S.Title color={color} {...props}>
      {children}
    </S.Title>
  );
}

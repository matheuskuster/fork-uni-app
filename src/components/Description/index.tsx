import { TextProps } from 'react-native';

import * as S from './styles';

interface DescriptionProps extends TextProps {
  color?: string;
  children: React.ReactNode;
}

export function Description({ color, children, ...props }: DescriptionProps) {
  return (
    <S.Description color={color} {...props}>
      {children}
    </S.Description>
  );
}

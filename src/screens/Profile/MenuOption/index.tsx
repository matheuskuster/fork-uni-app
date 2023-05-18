import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface MenuOptionProps extends TouchableOpacityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function MenuOption({
  title,
  description,
  icon,
  onPress,
}: MenuOptionProps) {
  return (
    <S.OptionContainer onPress={onPress}>
      {icon}
      <S.OptionTextContainer>
        <S.OptionTitle>{title}</S.OptionTitle>
        <S.OptionDescription>{description}</S.OptionDescription>
      </S.OptionTextContainer>
    </S.OptionContainer>
  );
}

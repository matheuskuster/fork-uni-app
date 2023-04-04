import * as S from './styles';

interface MenuOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function MenuOption({ title, description, icon }: MenuOptionProps) {
  return (
    <S.OptionContainer>
      {icon}
      <S.OptionTextContainer>
        <S.OptionTitle>{title}</S.OptionTitle>
        <S.OptionDescription>{description}</S.OptionDescription>
      </S.OptionTextContainer>
    </S.OptionContainer>
  );
}

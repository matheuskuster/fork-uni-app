import * as S from './styles';

interface OptionProps {
  title: string;
  observation?: string;
  icon: React.ReactNode;
}

export function Option({ title, observation, icon }: OptionProps) {
  return (
    <S.Container>
      {icon}
      <S.TextContainer>
        <S.OptionName>{title}</S.OptionName>
        {observation && <S.Observation>{observation}</S.Observation>}
      </S.TextContainer>
    </S.Container>
  );
}

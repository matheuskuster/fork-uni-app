import { useEffect } from 'react';

import * as S from './styles';

import { usePress } from '@/hooks/usePress';

type Item = {
  label: string;
  value: string | number;
};

interface RadioProps {
  items: Item[];
  value: string | number;
  onChange?: (value: string | number) => void;
}

export function Radio({ items, value, onChange }: RadioProps) {
  const safeOnChange = onChange ?? (() => {});

  return (
    <S.Container>
      {items.map((item) => (
        <RadioButton
          item={item}
          onChange={safeOnChange}
          checked={item.value === value}
          key={item.value}
        />
      ))}
    </S.Container>
  );
}

interface RadioButtonProps {
  item: Item;
  checked: boolean;
  onChange: (value: string | number) => void;
}

export function RadioButton({ item, checked, onChange }: RadioButtonProps) {
  const { press, fadeIn, fadeOut } = usePress({ to: 0.8 });

  return (
    <S.PressableContainer style={{ opacity: press }}>
      <S.RadioContainer
        onPress={() => onChange(item.value)}
        onPressIn={fadeIn}
        onPressOut={fadeOut}
      >
        <S.Radio>
          <RadioChecked checked={checked} />
        </S.Radio>

        <S.RadioLabel>{item.label}</S.RadioLabel>
      </S.RadioContainer>
    </S.PressableContainer>
  );
}

interface RadioCheckedProps {
  checked: boolean;
}

function RadioChecked({ checked }: RadioCheckedProps) {
  const { fadeIn, fadeOut, press } = usePress({ default: 0, to: 1 });

  useEffect(() => {
    if (checked) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [checked]);

  return <S.RadioChecked style={{ opacity: press }} />;
}

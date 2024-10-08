import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import DropdownPicker from 'react-native-dropdown-picker';

import * as S from './styles';

DropdownPicker.setLanguage('PT');

export type SelectItem = {
  label: string;
  value: string;
  icon?: () => JSX.Element;
};

interface SelectProps {
  value: string | null;
  items: SelectItem[];
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  setItems: React.Dispatch<React.SetStateAction<SelectItem[]>>;
  placeholder?: string;
}

export function Select({
  value,
  items,
  setValue,
  setItems,
  placeholder,
}: SelectProps) {
  const [open, setOpen] = useState(false);

  const ArrowDown = () => (
    <View style={{ marginRight: 8 }}>
      <AntDesign name="down" size={20} color="#A1FF00" />
    </View>
  );

  const ArrowUp = () => (
    <View style={{ marginRight: 8 }}>
      <AntDesign name="up" size={20} color="#A1FF00" />
    </View>
  );

  const Check = () => (
    <View style={{ marginRight: 8 }}>
      <AntDesign name="check" size={20} color="#A1FF00" />
    </View>
  );

  return (
    <>
      <S.PickerContainer>
        <DropdownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={placeholder}
          ArrowDownIconComponent={ArrowDown}
          ArrowUpIconComponent={ArrowUp}
          TickIconComponent={Check}
          placeholderStyle={S.styles.placeholder}
          style={S.styles.container}
          labelStyle={S.styles.label}
          itemSeparatorStyle={S.styles.itemSeparator}
          textStyle={S.styles.text}
          zIndex={1000}
          dropDownDirection="BOTTOM"
          maxHeight={1000}
          listMode="SCROLLVIEW"
          itemProps={{
            style: S.styles.item,
          }}
          itemSeparator
        />
      </S.PickerContainer>
    </>
  );
}

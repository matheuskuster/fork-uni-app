import { forwardRef } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';

import * as S from './styles';

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
}

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { disabled = false, rightIcon, containerStyle } = props;
  return (
    <S.InputContainer disabled={disabled} style={containerStyle}>
      <S.Input editable={!disabled} hasRightIcon={!!rightIcon} ref={ref} {...props} />
      {rightIcon}
    </S.InputContainer>
  );
});

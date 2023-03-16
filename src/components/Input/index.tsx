import { TextInputProps, ViewStyle } from 'react-native';

import * as S from './styles';

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
}

export function Input({ disabled = false, rightIcon, containerStyle, ...props }: InputProps) {
  return (
    <S.InputContainer disabled={disabled} style={containerStyle}>
      <S.Input editable={!disabled} hasRightIcon={!!rightIcon} {...props} />
      {rightIcon}
    </S.InputContainer>
  );
}

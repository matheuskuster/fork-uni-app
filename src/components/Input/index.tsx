import { forwardRef } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';

import * as S from './styles';

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  hasError?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {
    disabled = false,
    rightIcon,
    containerStyle,
    hasError,
    errorMessage,
  } = props;
  return (
    <>
      <S.InputContainer
        hasError={hasError}
        disabled={disabled}
        style={containerStyle}
      >
        <S.Input
          editable={!disabled}
          hasRightIcon={!!rightIcon}
          ref={ref}
          {...props}
        />
        {rightIcon}
      </S.InputContainer>
      {hasError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
});

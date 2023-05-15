import { forwardRef } from 'react';
import { TextInput, TextInputProps, ViewStyle } from 'react-native';

import * as S from './styles';

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  mask?: (string | RegExp)[];
  hasError?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {
    disabled = false,
    rightIcon,
    containerStyle,
    mask,
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
        {mask ? (
          <S.MaskedInput
            editable={!disabled}
            hasRightIcon={!!rightIcon}
            mask={mask}
            ref={ref}
            {...props}
          />
        ) : (
          <S.Input
            editable={!disabled}
            hasRightIcon={!!rightIcon}
            ref={ref}
            {...props}
          />
        )}

        {rightIcon}
      </S.InputContainer>
      {hasError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
});

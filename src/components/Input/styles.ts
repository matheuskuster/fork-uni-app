import { ColorValue } from 'react-native';
import MaskInput from 'react-native-mask-input';
import styled, { css } from 'styled-components/native';

interface InputContainerProps {
  disabled?: boolean;
  hasError?: boolean;
}

export const InputContainer = styled.View<InputContainerProps>`
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors['input.disabled'] : theme.colors.input};

  border-radius: ${(props) => props.theme.radii.lg};
  height: 56px;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.hasError &&
    css`
      border-color: ${props.theme.colors.red['500']};
      border-width: ${props.theme.spacing.px};
      border-radius: ${props.theme.radii.lg};
    `}
`;

interface InputProps {
  hasRightIcon?: boolean;
}

export const MaskedInput = styled(MaskInput).attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholder as ColorValue,
}))<InputProps>`
  flex: 1;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
  margin-right: ${(props) => (props.hasRightIcon ? 8 : 0)}px;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholder as ColorValue,
}))<InputProps>`
  flex: 1;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
  margin-right: ${(props) => (props.hasRightIcon ? 8 : 0)}px;
`;

export const ErrorMessage = styled.Text`
  align-self: flex-start;
  margin-top: ${(props) => props.theme.spacing[1]}px;

  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.red[500]};
`;

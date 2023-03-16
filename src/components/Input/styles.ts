import { ColorValue } from 'react-native';
import styled from 'styled-components/native';

interface InputContainerProps {
  disabled?: boolean;
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
`;

interface InputProps {
  hasRightIcon?: boolean;
}

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholder as ColorValue,
}))<InputProps>`
  flex: 1;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
  margin-right: ${(props) => (props.hasRightIcon ? 8 : 0)}px;
`;

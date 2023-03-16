import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  maxLength: 6,
  caretHidden: true,
  keyboardType: 'numeric',
})`
  height: 60px;
  width: 45px;
  background: ${(props) => props.theme.colors.input};
  border-radius: ${(props) => props.theme.radii.lg};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

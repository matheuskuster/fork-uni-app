import styled from 'styled-components/native';

interface TitleProps {
  color?: string;
}

export const Title = styled.Text<TitleProps>`
  font-size: ${(props) => props.theme.fontSizes['4xl']};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.color ?? props.theme.colors.black};
  width: 100%;
`;

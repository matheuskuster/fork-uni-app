import styled from 'styled-components/native';

interface SubtitleProps {
  color?: string;
}

export const Subtitle = styled.Text<SubtitleProps>`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.color ?? props.theme.colors.primary};
  width: 100%;
`;

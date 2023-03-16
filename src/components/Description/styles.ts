import styled from 'styled-components/native';

interface DescriptionProps {
  color?: string;
}

export const Description = styled.Text<DescriptionProps>`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.color ?? props.theme.colors.gray[100]};
  width: 100%;
`;

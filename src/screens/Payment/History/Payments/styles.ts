import styled from 'styled-components/native';

export const Container = styled.View`
  gap: ${(props) => props.theme.spacing[1]}px;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.gray['750']};
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextStyle = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.white};
`;

export const Title = styled(TextStyle)`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.md};
`;

export const DateText = styled(TextStyle)``;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled(TextStyle)`
  color: ${(props) => props.theme.colors.gray['200']};
`;

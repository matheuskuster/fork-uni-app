import styled from 'styled-components/native';

export const OptionContainer = styled.TouchableOpacity`
  height: 68px;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.spacing[4]}px;
`;

export const OptionTextContainer = styled.View`
  margin-left: ${(props) => props.theme.spacing[4]}px;
`;

export const OptionTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.white};
`;
export const OptionDescription = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes['2xs']};
  color: ${(props) => props.theme.colors.gray[200]};
`;

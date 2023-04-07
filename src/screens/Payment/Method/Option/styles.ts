import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.gray[750]};

  flex-direction: row;
  align-items: center;

  padding: ${(props) => props.theme.spacing[4]}px;

  border-radius: ${(props) => props.theme.radii.lg};
`;

export const TextContainer = styled.View`
  margin-left: ${(props) => props.theme.spacing[4]}px;
`;

export const OptionName = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
`;

export const Observation = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes['2xs']};
  color: ${(props) => props.theme.colors.gray[400]};
`;

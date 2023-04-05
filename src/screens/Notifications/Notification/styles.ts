import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: ${(props) => props.theme.spacing[3]}px;

  padding: ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px;

  border-bottom-color: ${(props) => props.theme.colors.gray[750]};
  border-bottom-width: 1px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.spacing[1]}px;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderDate = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.white};
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionText = styled.Text`
  width: 75%;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.gray[200]};
`;

export const DescriptionIsRead = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-top: ${(props) => props.theme.spacing[2]}px;
  background-color: ${(props) => props.theme.colors.yellow[500]};
`;

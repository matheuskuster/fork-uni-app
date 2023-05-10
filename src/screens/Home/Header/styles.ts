import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 58px;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

export const HeaderText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const HeaderHighLight = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
`;

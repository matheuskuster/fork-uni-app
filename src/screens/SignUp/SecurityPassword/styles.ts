import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
  justify-content: space-between;

  width: 100%;
  max-height: 43.5%;
  min-height: 43.5%;

  border-bottom-left-radius: ${(props) => props.theme.radii['2xl']};
  border-bottom-right-radius: ${(props) => props.theme.radii['2xl']};

  padding: ${(props) => props.theme.spacing['12']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['4']}px;

  background-color: ${(props) => props.theme.colors.gray[750]};
`;

export const Body = styled.View`
  padding-top: ${(props) => props.theme.spacing[6]}px;

  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

export const Content = styled.View`
  gap: ${(props) => props.theme.spacing[4]}px;
`;

export const VerificationContainer = styled.View`
  display: flex;
  flex-direction: row;

  gap: ${(props) => props.theme.spacing[2]}px;
`;

export const VerificationText = styled.Text`
  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const Footer = styled.View`
  margin-top: auto;
  padding-bottom: ${(props) => props.theme.spacing[12]}px;
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

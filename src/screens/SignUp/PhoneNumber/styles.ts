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
  flex: 1;
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

export const HeaderContent = styled.View`
  display: flex;
  gap: ${(props) => props.theme.spacing[2]}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

export const Body = styled.View`
  gap: ${(props) => props.theme.spacing[2]}px;
`;

export const DivisionLine = styled.View`
  width: 100%;
  height: 1px;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.gray[50]};
`;

export const DivisionTextContainer = styled.Text`
  height: 24px;

  // 58px = 20 + 20 (sides) + 18px (font size)
  width: 58px;

  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const DivisionText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray[500]};
`;

export const Footer = styled.View`
  position: relative;
  justify-self: baseline;

  padding-bottom: ${(props) => props.theme.spacing[12]}px;
  background-color: ${(props) => props.theme.colors.gray[850]};
`;

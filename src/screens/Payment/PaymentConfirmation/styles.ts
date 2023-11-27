import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
`;

// Header styles
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[4]}px;

  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[5]}px;
`;

export const ContentContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing[3]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;
`;

export const SimpleText = styled.Text`
  margin-bottom: ${(props) => props.theme.spacing[1]}px;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.gray[200]};
`;

export const Footer = styled.View`
  padding-bottom: ${(props) => props.theme.spacing[16]}px;
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
  background-color: ${(props) => props.theme.colors.background};
`;

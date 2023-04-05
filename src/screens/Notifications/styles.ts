import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-bottom: ${(props) => props.theme.spacing[12]}px;
  background-color: ${(props) => props.theme.colors.background};
`;

// Header styles
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${(props) => props.theme.spacing[10]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[8]}px
    ${(props) => props.theme.spacing[4]}px;

  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
`;

// Content
export const ContentContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;
`;

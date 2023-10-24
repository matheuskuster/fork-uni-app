import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray[800]};
  padding-bottom: -${(props) => props.theme.spacing[12]}px;
`;

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContainer = styled.View`
  max-height: 27%;

  align-items: center;

  padding: ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[6]}px
    ${(props) => props.theme.spacing[4]}px;

  border-bottom-left-radius: ${(props) => props.theme.radii['2xl']};
  border-bottom-right-radius: ${(props) => props.theme.radii['2xl']};

  background-color: ${(props) => props.theme.colors.gray[800]};
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderAlert = styled.View`
  margin-top: ${(props) => props.theme.spacing[12]}px;
`;

export const HeaderBoldText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderAlertText = styled.Text`
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.gray[400]};
`;

export const Content = styled.ScrollView`
  flex: 1%;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;
`;

export const SupportText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.gray[400]};
  text-align: center;
`;

export const TalkToUsButtonContainer = styled.View`
  margin-top: ${(props) => props.theme.spacing[4]}px;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`;

export const SecurityMessage = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.gray[400]};
  margin-top: ${(props) => props.theme.spacing[4]}px;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  text-align: center;
`;

export const DeleteButtonContainer = styled.View`
  margin-top: ${(props) => props.theme.spacing[4]}px;
`;

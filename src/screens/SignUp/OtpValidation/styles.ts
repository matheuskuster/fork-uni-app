import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding-left: ${(props) => props.theme.spacing[9]}px;
  padding-right: ${(props) => props.theme.spacing[9]}px;
  color: ${(props) => props.theme.colors.white};
`;

export const ContentTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
`;

export const ContentText = styled.Text`
  text-align: center;

  margin-top: ${(props) => props.theme.spacing[4]}px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};
`;

export const HighLight = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const ContentWarning = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};
`;

export const CodeContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: ${(props) => props.theme.spacing[2]}px;

  margin-top: ${(props) => props.theme.spacing[6]}px;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

export const CodeInput = styled.TextInput`
  height: 60px;
  width: 45px;

  text-align: center;

  border-radius: ${(props) => props.theme.radii.lg};

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  font-family: ${(props) => props.theme.fonts.bold};
  background-color: ${(props) => props.theme.colors.gray[750]};
`;

export const Spacing = styled.View``;

export const Footer = styled.View`
  gap: ${(props) => props.theme.spacing[4]}px;

  padding-top: auto;
  padding-bottom: ${(props) => props.theme.spacing[12]}px;
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

export const ResendButton = styled.TouchableOpacity``;

export const FooterMessage = styled.Text`
  text-align: center;

  padding-left: ${(props) => props.theme.spacing[9]}px;
  padding-right: ${(props) => props.theme.spacing[9]}px;

  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.light};
  color: ${(props) => props.theme.colors.white};
`;

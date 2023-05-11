import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  flex: 1;
  padding: ${(props) => props.theme.spacing[4]}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes['4xl']};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Subtitle = styled.Text`
  margin-bottom: ${(props) => props.theme.spacing[5]}px;

  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const TextForgotPassword = styled.Text`
  text-align: right;

  margin: ${(props) => props.theme.spacing[2]}px 0;

  color: ${(props) => props.theme.colors.green[500]};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const TextCotinueWithGoogle = styled.Text`
  text-align: center;

  margin: ${(props) => props.theme.spacing[2.5]}px 0;
  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const RegisterContainer = styled.View`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-self: center;
  margin-bottom: 52px;
`;

export const RegisterText = styled.Text`
  display: flex;
  flex-direction: row;

  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const RegisterButton = styled.TouchableOpacity``;

export const HighLight = styled.Text`
  margin-left: 3px;

  color: ${(props) => props.theme.colors.green[500]};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.medium};
`;

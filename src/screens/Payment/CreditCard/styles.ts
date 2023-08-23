import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;

  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[0]}px;

  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;

  padding: ${(props) => props.theme.spacing[3]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[0]}px;
`;

export const Description = styled.Text`
  margin-bottom: ${(props) => props.theme.spacing[6]}px;
  text-align: center;

  padding: ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[16]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[16]}px;

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.gray[200]};
`;

export const ButtonContainer = styled.View`
  padding-top: ${(props) => props.theme.spacing[4]}px;
  padding-bottom: ${(props) => props.theme.spacing[5]}px;
`;

export const ApplyButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

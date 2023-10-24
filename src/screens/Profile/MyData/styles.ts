import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-bottom: -${(props) => props.theme.spacing[8]}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContainer = styled.View`
  padding: ${(props) => props.theme.spacing[10]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[8]}px
    ${(props) => props.theme.spacing[4]}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;
`;

export const Section = styled.View`
  margin-top: ${(props) => props.theme.spacing[8]}px;
`;

type SectionTitleProps = {
  color?: string;
};

export const SectionTitle = styled.Text<SectionTitleProps>`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.color ?? props.theme.colors.gray[300]};
`;

export const Separator = styled.View`
  height: ${(props) => props.theme.spacing.px};
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray[750]};
`;

export const DeleteAccountButtonContainer = styled.View`
  margin-top: 12px;
`;

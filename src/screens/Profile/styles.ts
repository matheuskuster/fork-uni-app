import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding-bottom: ${(props) => props.theme.spacing[12]}px;

  background-color: ${(props) => props.theme.colors.background};
`;

// Header styles
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

// Content style
export const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;
`;

// User styles
export const UserContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin: ${(props) => props.theme.spacing[5]}px 0;
`;

export const UserName = styled.Text`
  margin-left: ${(props) => props.theme.spacing[4]}px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
`;

export const UserPhotoContainer = styled.View`
  height: 54px;
  width: 54px;
  border-radius: 27px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.green[500]};
`;

export const UserPhoto = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  color: ${(props) => props.theme.colors.black};
`;

// Separator style
export const Separator = styled.View`
  height: ${(props) => props.theme.spacing.px};
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray[750]};
`;

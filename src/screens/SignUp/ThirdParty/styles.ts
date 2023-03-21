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
  max-height: 340px;
  min-height: 340px;

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

export const InputContainer = styled.View`
  gap: ${(props) => props.theme.spacing[4]}px;
`;

export const Footer = styled.View`
  position: relative;
  justify-self: baseline;

  padding-bottom: ${(props) => props.theme.spacing[12]}px;
  background-color: ${(props) => props.theme.colors.gray[850]};
`;

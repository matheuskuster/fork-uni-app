import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
  flex: 1;
  justify-content: center;

  gap: ${(props) => props.theme.spacing[6]}px;

  width: 100%;
  max-height: 216px;
  min-height: 216px;

  border-bottom-left-radius: ${(props) => props.theme.radii['2xl']};
  border-bottom-right-radius: ${(props) => props.theme.radii['2xl']};

  padding: ${(props) => props.theme.spacing['8']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px;

  background-color: ${(props) => props.theme.colors.gray[750]};
`;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: ${(props) => props.theme.spacing[4]}px;
`;

export const IconContainer = styled.View`
  max-height: 60px;
  min-height: 60px;
  max-width: 60px;
  min-width: 60px;

  align-items: center;
  justify-content: center;

  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.green[500]};
`;

export const Body = styled.View`
  flex: 1;

  margin-top: ${(props) => props.theme.spacing[6]}px;
  margin-bottom: ${(props) => props.theme.spacing[12]}px;

  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

export const Content = styled.View`
  gap: ${(props) => props.theme.spacing[4]}px;
`;

export const Footer = styled.View`
  gap: ${(props) => props.theme.spacing[4]}px;

  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
  padding-bottom: ${(props) => props.theme.spacing[12]}px;
`;

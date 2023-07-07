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

export const Content = styled.View`
  margin-top: ${(props) => props.theme.spacing[6]}px;

  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

export const PickerContainer = styled.View`
  z-index: 5;
`;

export const Footer = styled.View`
  margin-top: auto;

  padding: ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[12]}px
    ${(props) => props.theme.spacing[4]}px;

  border-top-left-radius: ${(props) => props.theme.radii['2xl']};
  border-top-right-radius: ${(props) => props.theme.radii['2xl']};

  background-color: ${(props) => props.theme.colors.background};
`;

export const Modal = styled.Modal.attrs({
  animationType: 'slide',
  transparent: false,
})``;

export const ModalContainer = styled.View`
  flex:1
  align-items: center;
  justify-content: center;

  padding: ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px;

  background-color: ${(props) => props.theme.colors.gray['800']};
`;

export const ContentContainer = styled.View`
  flex:1
  align-items: center;
  justify-content: center;

  padding: ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px;

  background-color: ${(props) => props.theme.colors.gray['800']};
`;

export const Title = styled.Text`
  margin-top: ${(props) => props.theme.spacing['5']}px;

  text-align: center;

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Description = styled.Text`
  margin-top: ${(props) => props.theme.spacing['4']}px;

  text-align: center;

  color: ${(props) => props.theme.colors.gray['100']};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const HighLight = styled(Description)`
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const ButtonOptionsContainer = styled.View``;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 100%;
  height: 60px;

  margin-top: ${(props) => props.theme.spacing['8']}px;

  justify-content: center;
  align-items: center;

  padding: ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['2']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['2']}px;

  margin: auto ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['9']}px
    ${(props) => props.theme.spacing['4']}px;

  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.green['500']};
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray['850']};
`;

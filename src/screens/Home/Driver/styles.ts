import styled from 'styled-components/native';

export const DriverContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 102px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-radius: ${(props) => props.theme.radii.lg};
  padding: ${(props) => props.theme.spacing['0']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['0']}px
    ${(props) => props.theme.spacing['6']}px;

  margin-top: ${(props) => props.theme.spacing[4]}px;

  background-color: ${(props) => props.theme.colors.green['500']};
`;

export const DriverTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => props.theme.spacing[2]}px;
`;

export const DriverNameText = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
`;

export const DriverDescriptionText = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes['2xs']};
`;

export const ImageContainer = styled.View`
  height: 70px;
  width: 70px;

  justify-content: center;
  align-items: center;

  border-radius: 35px;
  background-color: ${(props) => props.theme.colors.gray['850']};
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

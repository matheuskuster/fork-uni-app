import styled from 'styled-components/native';

export const ModalContainer = styled.Modal``;

export const ContentContainer = styled.View`
  height: 366px;

  margin: auto;

  align-items: center;
  justify-content: center;

  padding: ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['4']}px;

  border-top-left-radius: ${(props) => props.theme.radii['3xl']};
  border-top-right-radius: ${(props) => props.theme.radii['3xl']};

  background-color: ${(props) => props.theme.colors.gray['800']};
`;

export const Title = styled.Text`
  margin-top: ${(props) => props.theme.spacing['5']}px;

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

export const ButtonOptionsContainer = styled.View`
  margin-top: ${(props) => props.theme.spacing['8']}px;

  flex-direction: row;
  gap: ${(props) => props.theme.spacing['2']}px;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  flex: 1;

  justify-content: center;
  align-items: center;

  padding: ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['0']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['0']}px;

  border-radius: ${(props) => props.theme.radii.lg};
`;

export const BackButton = styled(ButtonContainer)`
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.green['500']};
  background-color: 'transparent';
`;

export const ConfirmButton = styled(ButtonContainer)`
  background-color: ${(props) => props.theme.colors.green['500']};
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const BackButtonText = styled(ButtonText)`
  color: ${(props) => props.theme.colors.green['500']};
`;

export const ConfirmButtonText = styled(ButtonText)`
  color: ${(props) => props.theme.colors.gray['850']};
`;

import styled from 'styled-components/native';

export const DriverContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
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
  margin: ${(props) => props.theme.spacing[4]}px;
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

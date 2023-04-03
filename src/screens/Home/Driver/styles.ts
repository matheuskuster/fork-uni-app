import styled from 'styled-components/native';

export const DriverContainer = styled.View`
  height: 102px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border-radius: ${(props) => props.theme.radii.lg};
  margin-top: ${(props) => props.theme.spacing[4]}px;
  padding-left: ${(props) => props.theme.spacing[6]}px;
  padding-right: ${(props) => props.theme.spacing[6]}px;
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

  border-radius: 35px;
  background-color: ${(props) => props.theme.colors.gray['750']};
`;

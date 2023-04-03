import styled from 'styled-components/native';

export const BoardingContainer = styled.View`
  height: 224px;
  justify-content: space-between;
  border-radius: ${(props) => props.theme.radii.lg};
  margin-top: ${(props) => props.theme.spacing[4]}px;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;

  padding: ${(props) => props.theme.spacing['5']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['5']}px;

  background-color: ${(props) => props.theme.colors.gray['800']};
`;

export const ConfirmationStateBackground = styled.View`
  background-color: ${(props) => props.theme.colors.green['250']};
`;

export const ConfirmationState = styled.Text`
  width: 119px;

  padding-top: 3px;
  padding-bottom: 3px;

  text-align: center;
  border-radius: ${(props) => props.theme.radii.sm};
  background-color: ${(props) => props.theme.colors.green['250']};

  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.black};
`;

export const DateContainer = styled.View`
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

export const WeekText = styled.Text`
  color: ${(props) => props.theme.colors.green['500']};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const DateText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes['3.5xl']};
`;

export const ButtonBox = styled.TouchableOpacity`
  width: 317px;
  height: 50px;

  justify-content: center;
  align-items: center;

  border-radius: ${(props) => props.theme.radii.sm};
  background-color: ${(props) => props.theme.colors.red['900']};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.red['500']};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

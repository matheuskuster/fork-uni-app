import styled from 'styled-components/native';

export const BoardingContainer = styled.View`
  justify-content: space-between;
  border-radius: ${(props) => props.theme.radii.lg};

  padding: ${(props) => props.theme.spacing['5']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['5']}px;

  margin-top: ${(props) => props.theme.spacing[4]}px;

  background-color: ${(props) => props.theme.colors.gray['800']};
`;

export const ConfirmationStateBackground = styled.View`
  background-color: ${(props) => props.theme.colors.green['250']};
`;

export const ConfirmationState = styled.Text`
  padding: ${(props) => props.theme.spacing['1']}px
    ${(props) => props.theme.spacing['3']}px
    ${(props) => props.theme.spacing['1']}px
    ${(props) => props.theme.spacing['3']}px;

  margin-right: auto;
  text-align: center;

  border-radius: ${(props) => props.theme.radii.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Confirmed = styled(ConfirmationState)`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.green['250']};
`;

export const Unconfirmed = styled(ConfirmationState)`
  color: ${(props) => props.theme.colors.red['500']};
  background-color: ${(props) => props.theme.colors.red['900']};
`;

export const DateContainer = styled.View`
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

export const WeekText = styled.Text`
  color: ${(props) => props.theme.colors.green['500']};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const HourText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const DateText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes['3.5xl']};
`;

interface ButtonConfimationProps {
  isConfirmed: boolean;
  disabled?: boolean;
}

export const ButtonBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<ButtonConfimationProps>`
  padding: ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['0']}px
    ${(props) => props.theme.spacing['4']}px
    ${(props) => props.theme.spacing['0']}px;

  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  border-radius: ${(props) => props.theme.radii.sm};
  background-color: ${(props) =>
    props.isConfirmed
      ? props.theme.colors.red['900']
      : props.theme.colors.green['950']};
`;

export const ButtonText = styled.Text<ButtonConfimationProps>`
  color: ${(props) =>
    props.isConfirmed
      ? props.theme.colors.red['500']
      : props.theme.colors.green['500']};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

import styled from 'styled-components/native';

export const PaymentContainer = styled.View`
  align-items: center;
  flex-direction: row;

  padding: ${(props) => props.theme.spacing['7']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['6']}px
    ${(props) => props.theme.spacing['7']}px;

  margin-top: ${(props) => props.theme.spacing[4]}px;
  margin-bottom: ${(props) => props.theme.spacing[8]}px;
  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.gray['800']};
`;

export const StatusBox = styled.View`
  margin-left: ${(props) => props.theme.spacing['4']}px;
`;

export const DescriptionBox = styled.View`
  flex-direction: row;
  margin-top: ${(props) => props.theme.spacing['1']}px;
`;

export const StatusText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
export const StatusTag = styled.Text`
  padding: ${(props) => props.theme.spacing['1']}px
    ${(props) => props.theme.spacing['2']}px
    ${(props) => props.theme.spacing['1']}px
    ${(props) => props.theme.spacing['2']}px;

  text-align: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radii.sm};

  font-size: ${(props) => props.theme.fontSizes['2xs']};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray['800']};
`;

export const PaidStatusTag = styled(StatusTag)`
  background-color: ${(props) => props.theme.colors.green['650']};
`;

export const PendingStatusTag = styled(StatusTag)`
  background-color: ${(props) => props.theme.colors.yellow['600']};
`;

export const StatusDate = styled.Text`
  margin-left: ${(props) => props.theme.spacing['2']}px;

  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const IconContainer = styled.View`
  height: 48px;
  width: 48px;

  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.radii.sm};

  background-color: ${(props) => props.theme.colors.gray['750']};
`;

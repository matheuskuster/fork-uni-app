import styled from 'styled-components/native';

export const CardContainer = styled.View`
  height: 26px;
  width: 42px;

  justify-content: center;
  align-items: center;

  border-radius: ${(props) => props.theme.radii.sm};
`;

export const VisaContainer = styled(CardContainer)`
  background-color: ${'#00579F'};
`;

export const MastercardContainer = styled(CardContainer)`
  background-color: ${'#3A3A3A'};
`;

export const EloContainer = styled(CardContainer)`
  background-color: ${'#222222'};
`;

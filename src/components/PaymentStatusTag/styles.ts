import styled from 'styled-components/native';

interface ContainerProps {
  isPaid: boolean;
}

export const Container = styled.Text<ContainerProps>`
  margin-right: auto;

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

  background-color: ${(props) =>
    props.isPaid
      ? props.theme.colors.green['650']
      : props.theme.colors.yellow['600']};
`;

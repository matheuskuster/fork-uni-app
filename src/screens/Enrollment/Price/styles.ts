import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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
  gap: ${(props) => props.theme.spacing[4]}px;

  align-items: center;
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

export const Body = styled.View`
  flex: 1;

  margin-top: ${(props) => props.theme.spacing[6]}px;

  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
`;

export const Content = styled.View`
  gap: ${(props) => props.theme.spacing[1]}px;

  padding-left: ${(props) => props.theme.spacing[5]}px;
  padding-right: ${(props) => props.theme.spacing[5]}px;
`;

export const ClassText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.light};
  color: ${(props) => props.theme.colors.gray[400]};
`;

export const ClassValueText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
`;

export const HighLight = styled.Text`
  font-size: ${(props) => props.theme.fontSizes['7xl']};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.green[500]};
`;

export const Footer = styled.View`
  gap: ${(props) => props.theme.spacing[4]}px;

  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
  margin-bottom: ${(props) => props.theme.spacing[12]}px;
`;

export const FooterMessage = styled.Text`
  text-align: center;

  padding-left: ${(props) => props.theme.spacing[9]}px;
  padding-right: ${(props) => props.theme.spacing[9]}px;

  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.light};
  color: ${(props) => props.theme.colors.white};
`;

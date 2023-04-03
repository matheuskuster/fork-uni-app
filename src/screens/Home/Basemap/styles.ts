import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const BasemapImage = styled.ImageBackground.attrs({
  source: require('../../../../assets/basemap.png'),
  resizeMode: 'contain',
})`
  margin-top: ${(props) => props.theme.spacing[4]}px;
`;

export const GradientContainer = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)'],
})`
  height: 180px;
  justify-content: flex-end;

  padding-left: ${(props) => props.theme.spacing[6]}px;
  padding-right: ${(props) => props.theme.spacing[6]}px;
  padding-bottom: ${(props) => props.theme.spacing[5]}px;
  border-radius: ${(props) => props.theme.radii.lg};
`;

export const RouteTitle = styled.Text`
  color: ${(props) => props.theme.colors.green['500']};

  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.md};
`;
export const RouteText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
`;
export const ShiftText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.md};
`;

import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${(props) => props.theme.spacing[4]}px;
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView``;

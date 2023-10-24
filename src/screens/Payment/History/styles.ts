import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  background-color: ${(props) => props.theme.colors.background};
`;

// Header styles
export const HeaderContainer = styled.View`
  height: 27%;

  align-items: center;

  padding: ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[6]}px
    ${(props) => props.theme.spacing[4]}px;

  border-bottom-left-radius: ${(props) => props.theme.radii['2xl']};
  border-bottom-right-radius: ${(props) => props.theme.radii['2xl']};

  background-color: ${(props) => props.theme.colors.gray[800]};
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
`;

export const PaymentContainer = styled.View`
  width: 100%;

  align-items: center;
  flex-direction: row;

  margin-top: auto;
  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.gray['800']};
`;

export const StatusContainer = styled.View`
  gap: ${(props) => props.theme.spacing['1']}px;
  margin-left: ${(props) => props.theme.spacing['8']}px;
`;

export const DateText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
`;

export const IconContainer = styled.View`
  height: ${(props) => props.theme.spacing['16']}px;
  width: ${(props) => props.theme.spacing['16']}px;

  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.radii.sm};

  background-color: ${(props) => props.theme.colors.gray['750']};
`;

// Content styles
export const ContentContainer = styled.ScrollView`
  flex: 1;

  padding: ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const CategoryContainer = styled.View`
  margin-top: ${(props) => props.theme.spacing[6]}px;
  gap: ${(props) => props.theme.spacing['2']}px;
`;

export const HistoryContainer = styled.View`
  gap: ${(props) => props.theme.spacing['2']}px;
  margin-top: ${(props) => props.theme.spacing[8]}px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  gap: ${(props) => props.theme.spacing['3']}px;
`;

export const DescriptionText = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

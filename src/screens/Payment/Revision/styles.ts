import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

// Header styles
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[7]}px
    ${(props) => props.theme.spacing[4]}px;

  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.semibold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;

  padding: ${(props) => props.theme.spacing[3]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;
`;

export const SimpleText = styled.Text`
  margin-bottom: ${(props) => props.theme.spacing[4]}px;

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.gray[200]};
`;

// Revision styles
export const RevisionContainer = styled.View`
  padding: ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[4]}px
    ${(props) => props.theme.spacing[0]}px
    ${(props) => props.theme.spacing[4]}px;

  margin-bottom: ${(props) => props.theme.spacing[12]}px;
  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.gray[750]};
`;

export const RevisionTitle = styled.Text`
  margin-bottom: ${(props) => props.theme.spacing[1]}px;

  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.gray[350]};
`;

export const RevisionDescription = styled.Text`
  margin-bottom: ${(props) => props.theme.spacing[4]}px;

  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.white};
`;

// Cupom styles
export const ApplyButton = styled.TouchableOpacity``;

export const ApplyButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.green[500]};
`;

// Payment styles
export const PaymentMethodButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: transparent;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${(props) => props.theme.spacing[3.5]}px;
  margin-bottom: ${(props) => props.theme.spacing[7]}px;

  border-radius: ${(props) => props.theme.radii.lg};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray[50]};
`;

export const PaymentMethodText = styled.Text`
  margin-right: auto;
  margin-left: auto;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
`;

// Balance styles
export const BalanceText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.gray[200]};
`;

export const Subtotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing[1]}px;
`;

export const Discount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing[1]}px;
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`;

export const TotalText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.green[500]};
`;

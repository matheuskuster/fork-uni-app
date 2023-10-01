import { LinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from '../styles';

import { BackButton } from '@/components';

interface HistoryShimmerProps {
  isVisible: boolean;
}

export function HistoryShimmer({ isVisible }: HistoryShimmerProps) {
  const theme = useTheme();

  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  const styles = {
    backButton: {
      backgroundColor: `${theme.colors.gray[750]}`,
      position: 'absolute',
      left: theme.spacing[4],
      top: theme.spacing[4],
    } as ViewStyle,
    iconShimmer: {
      height: theme.spacing['16'],
      width: theme.spacing['16'],
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
    } as ViewStyle,
    tagShimmer: {
      borderRadius: theme.spacing[1],
      width: '60%',
      height: theme.spacing[6],
    } as ViewStyle,
    dateTextShimmer: {
      borderRadius: theme.spacing[1],
      width: '90%',
      height: theme.spacing[5],
    } as ViewStyle,
    categoryTitleShimmer: {
      borderRadius: theme.spacing[1],
      width: '50%',
      height: theme.spacing[4],
      marginTop: theme.spacing[2],
    } as ViewStyle,
    categoryContentShimmer: {
      borderRadius: theme.spacing[1],
      width: '90%',
      height: theme.spacing[7],
      marginTop: theme.spacing[0.5],
    } as ViewStyle,
    notificationTitleShimmer: {
      borderRadius: theme.spacing[1],
      width: '50%',
      height: theme.spacing[4],
    } as ViewStyle,
    notificationShimmer: {
      borderRadius: theme.spacing[1],
      width: '100%',
      height: theme.spacing[10],
      marginTop: theme.spacing[0.5],
    } as ViewStyle,
  };

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <S.Container>
      <S.HeaderContainer>
        <BackButton containerStyle={styles.backButton} />

        <S.HeaderTitle>Pagamento</S.HeaderTitle>

        <S.PaymentContainer>
          <ShimmerPlaceHolder
            style={styles.iconShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />
          <S.StatusContainer>
            <ShimmerPlaceHolder
              style={styles.tagShimmer}
              shimmerColors={linearGradientColors}
              duration={400}
              visible={isVisible}
            />
            <ShimmerPlaceHolder
              style={styles.dateTextShimmer}
              shimmerColors={linearGradientColors}
              duration={400}
              visible={isVisible}
            />
          </S.StatusContainer>
        </S.PaymentContainer>
      </S.HeaderContainer>

      <S.ContentContainer>
        <S.CategoryContainer>
          <ShimmerPlaceHolder
            style={styles.categoryTitleShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />

          <ShimmerPlaceHolder
            style={styles.categoryContentShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />

          <ShimmerPlaceHolder
            style={styles.categoryTitleShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />

          <ShimmerPlaceHolder
            style={styles.categoryContentShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />

          <ShimmerPlaceHolder
            style={styles.categoryTitleShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />

          <ShimmerPlaceHolder
            style={styles.categoryContentShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />
        </S.CategoryContainer>

        <S.HistoryContainer>
          <ShimmerPlaceHolder
            style={styles.notificationTitleShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />

          <ShimmerPlaceHolder
            style={styles.notificationShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />

          <ShimmerPlaceHolder
            style={styles.notificationShimmer}
            shimmerColors={linearGradientColors}
            duration={400}
            visible={isVisible}
          />
        </S.HistoryContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface OptionProps extends ButtonProps {
  title: string;
  observation?: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
}

export function Option({
  title,
  observation,
  icon,
  onPress,
  isLoading,
  isSelected,
}: OptionProps) {
  const theme = useTheme();

  const linearGradientColors = [
    theme.colors.gray[750],
    theme.colors.gray[700],
    theme.colors.gray[700],
  ];

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  if (isLoading) {
    return (
      <S.Container isSelected={isSelected} onPress={onPress}>
        <ShimmerPlaceHolder
          style={{
            borderRadius: theme.spacing[2],
            width: theme.spacing[10],
            height: theme.spacing[7],
          }}
          shimmerColors={linearGradientColors}
          visible={!isLoading}
          duration={400}
        >
          {icon}
        </ShimmerPlaceHolder>

        <S.TextContainer>
          <ShimmerPlaceHolder
            style={{
              borderRadius: theme.spacing[2],
              width: theme.spacing[48],
              height: theme.spacing[5],
              marginBottom: theme.spacing[1],
            }}
            shimmerColors={linearGradientColors}
            visible={!isLoading}
            duration={400}
          >
            <S.OptionName>{title}</S.OptionName>
          </ShimmerPlaceHolder>

          <ShimmerPlaceHolder
            style={{
              borderRadius: theme.spacing[2],
              width: theme.spacing[20],
              height: theme.spacing[3],
            }}
            shimmerColors={linearGradientColors}
            visible={!isLoading}
            duration={400}
          >
            {observation && <S.Observation>{observation}</S.Observation>}
          </ShimmerPlaceHolder>
        </S.TextContainer>
      </S.Container>
    );
  } else {
    return (
      <S.Container isSelected={isSelected} onPress={onPress}>
        {icon}
        <S.TextContainer>
          <S.OptionName>{title}</S.OptionName>
          {observation && <S.Observation>{observation}</S.Observation>}
        </S.TextContainer>
      </S.Container>
    );
  }
}

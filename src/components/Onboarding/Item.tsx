import { useWindowDimensions } from 'react-native';

import * as S from './Item.styles';
import { SlideIndicator } from './SlideIndicator';

import { Button } from '@/components/Button';
import { onboardingSlides } from '@/utils/constants/onboardingSlides';

type Item = (typeof onboardingSlides)[0];

interface OnboardingItemProps {
  item: Item;
  onNext: () => void;
}

export function OnboardingItem({ item, onNext }: OnboardingItemProps) {
  const { height, width } = useWindowDimensions();

  return (
    <S.Container style={{ width, height }}>
      <S.Image source={item.image} />
      <S.Information>
        <S.InformationTitle>{item.title}</S.InformationTitle>
        <S.InformationSubtitle textPadding={item.subtitlePadding}>
          {item.subtitle}
        </S.InformationSubtitle>
        <Button onPress={onNext}>{item.buttonText}</Button>
        <SlideIndicator count={3} currentIndex={item.id - 1} />
      </S.Information>
    </S.Container>
  );
}

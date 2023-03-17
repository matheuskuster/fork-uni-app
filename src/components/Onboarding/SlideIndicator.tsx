import { HStack } from 'react-native-stacks';

import * as S from './SlideIndicator.styles';

interface SlideIndicatorProps {
  count: number;
  currentIndex: number;
}

export function SlideIndicator({ count, currentIndex }: SlideIndicatorProps) {
  return (
    <S.SlideIndicatorContainer>
      <HStack spacing={5}>
        {Array.from({ length: count }).map((_, index) => (
          <S.SlideIndicator key={index} active={index === currentIndex} />
        ))}
      </HStack>
    </S.SlideIndicatorContainer>
  );
}

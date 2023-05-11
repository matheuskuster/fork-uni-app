import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Animated, FlatList, ViewToken } from 'react-native';

import { Onboarding } from '@/components/Onboarding';
import { SignInNavigatorRoutesProps } from '@/routes/auth.routes';
import { onboardingSlides } from '@/utils/constants/onboardingSlides';

export function OnboardingScreen() {
  const navigation = useNavigation<SignInNavigatorRoutesProps>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChange = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index!);
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNext = () => {
    if (currentIndex === onboardingSlides.length - 1) {
      navigation.replace('signIn');
    }

    if (slidesRef.current && currentIndex < onboardingSlides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <FlatList
      data={onboardingSlides}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <Onboarding.Item item={item} onNext={handleNext} />
      )}
      style={{ flex: 1 }}
      horizontal
      bounces={false}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={viewableItemsChange}
      viewabilityConfig={viewConfig}
      scrollEventThrottle={32}
      scrollEnabled={false}
      ref={slidesRef}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: { x: scrollX },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )}
    />
  );
}

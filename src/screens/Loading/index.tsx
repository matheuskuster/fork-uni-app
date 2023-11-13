import { ActivityIndicator } from 'react-native';

import * as S from './styles';

import { theme } from '@/theme';

export function FullscreenLoading() {
  return (
    <S.Container>
      <ActivityIndicator size="large" color={theme.colors.gray[200]} />
    </S.Container>
  );
}

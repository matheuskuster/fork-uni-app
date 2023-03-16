import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const BackButtonContainer = styled(Animated.View)`
  height: 50px;
  width: 50px;
  background: ${(props) => props.theme.colors.gray[850]};
  border-radius: ${(props) => props.theme.radii.lg};
`;

export const BackButton = styled.Pressable`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radii.lg};
`;

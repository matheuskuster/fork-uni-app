import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.gray[750]};
`;

export const Button = styled.Pressable`
  height: 48px;
  width: 48px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

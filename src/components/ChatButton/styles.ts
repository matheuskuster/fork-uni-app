import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.primary};
`;

export const Button = styled.Pressable`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

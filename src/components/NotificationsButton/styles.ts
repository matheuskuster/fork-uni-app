import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.gray[750]};
`;

export const Button = styled.Pressable`
  /* position: relative; */
  height: 48px;
  width: 48px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.View`
  position: absolute;
  top: 7px;
  right: 9px;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.primary};
`;

export const BadgeText = styled.Text`
  font-size: 8px;
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
`;

import { Animated } from 'react-native';
import { VStack } from 'react-native-stacks';
import styled from 'styled-components/native';

export const Container = styled(VStack)`
  flex: 0 1;
`;

export const PressableContainer = styled(Animated.View)`
  width: 100%;
  background: ${(props) => props.theme.colors.input};
  border-radius: ${(props) => props.theme.radii.lg};
  height: 60px;
`;

export const RadioContainer = styled.Pressable`
  width: 100%;
  height: 60px;

  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const RadioLabel = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fonts.regular};
  margin-left: 16px;
`;

export const Radio = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: ${(props) => props.theme.colors.background};

  align-items: center;
  justify-content: center;
`;

export const RadioChecked = styled(Animated.View)`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.primary};
`;

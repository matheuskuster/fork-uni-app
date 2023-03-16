import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const GoogleButtonContainer = styled(Animated.View)`
  width: 100%;
  height: 59px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radii.lg};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoogleButton = styled.Pressable`
  height: 59px;
  width: 100%;
  padding: 16px;
  border-radius: ${(props) => props.theme.radii.lg};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoogleButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.gray[650]};
`;

export const Dumby = styled.View`
  width: 24px;
  height: 24px;
`;

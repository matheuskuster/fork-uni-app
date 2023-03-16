import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface ButtonContainerProps {
  disabled?: boolean;
}

export const ButtonContainer = styled(Animated.View)<ButtonContainerProps>`
  height: 59px;
  width: ${(props) => props.theme.spacing.full};
  background: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radii.lg};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface ButtonProps {
  withIcon?: boolean;
}

export const Button = styled.Pressable<ButtonProps>`
  height: 59px;
  width: 100%;
  padding: 16px;
  width: ${(props) => props.theme.spacing.full};
  border-radius: ${(props) => props.theme.radii.lg};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.withIcon ? 'space-between' : 'center')};
`;

export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

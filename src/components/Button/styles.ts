import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { ButtonVariant } from '.';

import { theme } from '@/theme';

interface ButtonContainerProps {
  disabled?: boolean;
  variant: ButtonVariant;
}

const getButtonContainerColor = (props: ButtonContainerProps) => {
  if (props.variant === 'greenish') {
    return theme.colors.green[950];
  }

  if (props.variant === 'danger') {
    return theme.colors.red[900];
  }

  return theme.colors.primary;
};

export const ButtonContainer = styled(Animated.View)<ButtonContainerProps>`
  height: 59px;
  width: ${(props) => props.theme.spacing.full};
  background: ${getButtonContainerColor};
  border-radius: ${(props) => props.theme.radii.lg};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface ButtonProps {
  iconType: 'all' | 'left' | 'right' | 'none';
}

const getJustifyContent = (props: ButtonProps) => {
  if (props.iconType === 'all' || props.iconType === 'right') {
    return 'space-between';
  }

  if (props.iconType === 'left') {
    return 'flex-start';
  }

  return 'center';
};

export const Button = styled.Pressable<ButtonProps>`
  height: 59px;
  width: 100%;
  padding: 16px;
  width: ${(props) => props.theme.spacing.full};
  border-radius: ${(props) => props.theme.radii.lg};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${getJustifyContent};
`;

type ButtonTextProps = {
  variant?: ButtonVariant;
};

const getButtonTextColor = (props: ButtonTextProps) => {
  if (props.variant === 'greenish') {
    return theme.colors.primary;
  }

  if (props.variant === 'danger') {
    return theme.colors.red[500];
  }

  return theme.colors.black;
};

export const ButtonContent = styled.View``;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: ${(props) =>
    props.variant === 'greenish'
      ? props.theme.fonts.regular
      : props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${getButtonTextColor};
`;

const getButtonDescriptionColor = (props: ButtonTextProps) => {
  if (props.variant === 'greenish') {
    return theme.colors.green[700];
  }

  if (props.variant === 'danger') {
    return theme.colors.red[500];
  }

  return theme.colors.black;
};

export const ButtonDescription = styled.Text<ButtonTextProps>`
  font-family: ${(props) => props.theme.fonts.extraLight};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${getButtonDescriptionColor};
`;

export const LeftIconContainer = styled.View`
  margin-right: ${(props) => props.theme.spacing[3]}px;
`;

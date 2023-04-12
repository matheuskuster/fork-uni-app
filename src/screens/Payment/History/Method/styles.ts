import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
`;

export const MethodContainer = styled.View`
  gap: ${(props) => props.theme.spacing['2']}px;
`;

export const PickedMethodContainer = styled.View`
  flex-direction: row;
  gap: ${(props) => props.theme.spacing[4]}px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.light};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.gray['50']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const ChangeButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: ${(props) => props.theme.spacing['8']}px;
  height: ${(props) => props.theme.spacing['8']}px;
  border-radius: ${(props) => props.theme.radii.sm};

  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray['750']};
`;

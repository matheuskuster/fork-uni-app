import styled from 'styled-components/native';

export const SlideIndicatorContainer = styled.View`
  margin-top: 17px;
`;

interface SlideIndicatorProps {
  active?: boolean;
}

export const SlideIndicator = styled.View<SlideIndicatorProps>`
  height: 8px;
  width: ${({ active }) => (active ? 18 : 8)}px;
  border-radius: 4px;
  background: ${({ theme, active }) =>
    active ? theme.colors.green[500] : theme.colors.gray[150]};
`;

import styled from 'styled-components/native';

export const Image = styled.Image`
  position: absolute;
  bottom: 42%;
`;

export const Information = styled.View`
  height: 42%;
  width: 100%;
  background: white;
  border-top-left-radius: ${({ theme }) => theme.radii['2xl']};
  border-top-right-radius: ${({ theme }) => theme.radii['2xl']};
  padding: 40px 30px;

  align-items: center;
  justify-content: center;
`;

export const InformationTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 24px;
`;

interface InformationSubtitleProps {
  textPadding?: number;
}

export const InformationSubtitle = styled.Text<InformationSubtitleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray[400]};
  text-align: center;
  margin-bottom: 32px;
  padding: 0 ${(props) => props.textPadding ?? 10}px;
`;

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

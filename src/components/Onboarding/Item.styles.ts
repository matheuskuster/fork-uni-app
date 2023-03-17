import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: flex-end;
`;

export const Image = styled.Image`
  position: absolute;
  bottom: 42%;
`;

export const Information = styled.View`
  height: 42%;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
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

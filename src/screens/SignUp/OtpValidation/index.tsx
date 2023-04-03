import { useMemo, useState } from 'react';
import { useInterval } from 'usehooks-ts';

import * as S from './styles';

import { NextButton, VerifyCodeInput } from '@/components';

export function OtpValidation() {
  const [otp, setOtp] = useState('');

  const [counter, setCounter] = useState<number>(120);
  const delay = 1000;

  const handleChange = (code: string) => {
    setOtp(code);
  };

  useInterval(
    () => {
      setCounter(counter - 1);
    },

    counter ? delay : null,
  );

  const remainingTime = () => {
    const minutes = String(Math.floor(counter / 60)).padStart(2, '0');
    const seconds = String(counter % 60).padStart(2, '0');

    return `${minutes} : ${seconds}`;
  };

  const formattedTimer = useMemo(remainingTime, [counter]);

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.ContentContainer>
        <S.ContentTitle>Verifique sua conta</S.ContentTitle>
        <S.ContentText>
          Digite o código SMS enviado para o número:{' '}
          <S.HighLight>27 XXXXX-4567</S.HighLight>
        </S.ContentText>

        <S.CodeContainer>
          <VerifyCodeInput onChange={handleChange} />
        </S.CodeContainer>

        <S.ContentWarning>
          O código expira em: <S.HighLight>{formattedTimer}</S.HighLight>
        </S.ContentWarning>
      </S.ContentContainer>

      <S.Footer>
        <S.ResendButton>
          <S.FooterMessage>Não recebi o código de confirmação</S.FooterMessage>
        </S.ResendButton>
        <NextButton disabled={!(otp.length === 6)}>
          Validar conta e fazer cotação
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

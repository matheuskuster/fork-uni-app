import { useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { useInterval } from 'usehooks-ts';

import * as S from './styles';

import { useSelector, useDispatch } from '@/app/hooks';
import { NextButton, VerifyCodeInput } from '@/components';
import { sendOtp, verifyOtp } from '@/features/otp/otpActions';

const COUNTER_INTERVAL_IN_MS = 1000;

export function OtpValidation() {
  const { isSending, isVerifying, lastSentAt } = useSelector(
    (state) => state.otp,
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');

  const [counter, setCounter] = useState<number>(60 * 5);

  const handleChange = (code: string) => {
    setOtp(code);
  };

  useInterval(
    () => {
      setCounter(counter - 1);
    },

    counter ? COUNTER_INTERVAL_IN_MS : null,
  );

  function remainingTime() {
    const minutes = String(Math.floor(counter / 60)).padStart(2, '0');
    const seconds = String(counter % 60).padStart(2, '0');
    return `${minutes} : ${seconds}`;
  }

  function handleSendOtp() {
    const now = new Date().getTime();
    const hasPassed5Min = lastSentAt
      ? now - lastSentAt.getTime() > 300000
      : false;

    if (!isSending && !isVerifying) {
      setCounter(60 * 5);
      if (!lastSentAt || hasPassed5Min) {
        dispatch(sendOtp());
      } 
    }
  }

  function handleVerifyOtp() {
    if (!otp) {
      return Alert.alert('Erro', 'Insira o código de verificação');
    }

    dispatch(verifyOtp(otp));
  }

  const formattedTimer = useMemo(remainingTime, [counter]);

  const canResend = useMemo(() => {
    const now = new Date().getTime();
    const hasPassed4Min = lastSentAt
      ? now - lastSentAt.getTime() > 240000
      : false;

    return !isSending && !isVerifying && hasPassed4Min;
  }, [counter]);

  const maskedPhone = useMemo(() => {
    if (user?.phone) {
      const noSpaces = user.phone.replace(' ', '');
      const ddd = noSpaces.replace('+55', '').slice(0, 2);
      const last4Digits = noSpaces.slice(-4);
      return `${ddd} XXXXX-${last4Digits}`;
    }
  }, [user?.phone]);

  useEffect(handleSendOtp, []);

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.ContentContainer>
        <S.ContentTitle>Verifique sua conta</S.ContentTitle>
        <S.ContentText>
          Digite o código SMS enviado para o número:{' '}
          <S.HighLight>{maskedPhone}</S.HighLight>
        </S.ContentText>

        <S.CodeContainer>
          <VerifyCodeInput onChange={handleChange} />
        </S.CodeContainer>

        <S.ContentWarning>
          O código expira em: <S.HighLight>{formattedTimer}</S.HighLight>
        </S.ContentWarning>
      </S.ContentContainer>

      <S.Footer>
        {canResend && (
          <S.ResendButton onPress={handleSendOtp}>
            <S.FooterMessage>
              Não recebi o código de confirmação
            </S.FooterMessage>
          </S.ResendButton>
        )}
        <NextButton
          disabled={!(otp.length === 6)}
          isLoading={isVerifying || isSending}
          onPress={handleVerifyOtp}
        >
          Validar conta e fazer cotação
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

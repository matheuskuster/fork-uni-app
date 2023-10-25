import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { Alert, Linking } from 'react-native';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, Button, Input } from '@/components';
import { deleteAccount } from '@/features/auth/authActions';
import { signOut } from '@/features/auth/authSlice';
import { ChatIcon } from '@/icons/ChatIcon';
import { ProfileNavigatorRoutesProps } from '@/routes/profile.routes';
import { theme } from '@/theme';
import { whatsAppLink } from '@/utils/constants/whatsAppLink';

const securityMessage = 'Excluir conta Vou de Van';

export function DeleteAccount() {
  const navigation = useNavigation<ProfileNavigatorRoutesProps>();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [writtenPhrase, setWrittenPhrase] = useState('');

  const buttonDisabled = useMemo(() => {
    return writtenPhrase !== securityMessage;
  }, [writtenPhrase]);

  async function handleDeleteAccount() {
    try {
      dispatch(deleteAccount()).unwrap();

      Alert.alert(
        'Sucesso',
        'Sua conta foi deletada com sucesso. Pode demorar alguns dias até que todos os seus dados sejam excluídos.',
        [{ text: 'OK', onPress: () => dispatch(signOut()) }],
      );
    } catch {
      Alert.alert(
        'Erro deletar conta',
        'Tente novamente mais tarde ou entre em contato com nosso suporte.',
      );
    }
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.HeaderContainer>
          <BackButton
            onPress={() => navigation.goBack()}
            containerStyle={{
              backgroundColor: `${theme.colors.gray[750]}`,
              position: 'absolute',
              left: theme.spacing[4],
              top: theme.spacing[4],
            }}
          />
          <S.HeaderTitle>Excluir minha conta</S.HeaderTitle>

          <S.HeaderAlert>
            <S.HeaderAlertText>
              <S.HeaderBoldText>Atenção:{'  '}</S.HeaderBoldText>
              você está prestes a apagar todas as suas informações na Vou de Van
              e não será possível recuperá-las.
            </S.HeaderAlertText>
          </S.HeaderAlert>
        </S.HeaderContainer>

        <S.Content>
          <S.SupportText>
            Se você deseja continuar usando outros serviços da Vou de Van ou
            teve algum problema ou desconforto, poderia nos contar? Estamos aqui
            para ajudar.
          </S.SupportText>

          <S.TalkToUsButtonContainer>
            <Button
              description="Estamos aqui para te ajudar"
              leftIcon={<ChatIcon color={theme.colors.primary} />}
              variant="greenish"
              onPress={() => {
                Linking.openURL(whatsAppLink.url);
              }}
            >
              Fale conosco
            </Button>
          </S.TalkToUsButtonContainer>

          <S.SupportText>
            Mas, se você realmente deseja excluir sua conta, por favor repita a
            frase abaixo para que essa opção seja liberada:
          </S.SupportText>

          <S.SecurityMessage>{securityMessage}</S.SecurityMessage>

          <Input
            onChangeText={setWrittenPhrase}
            value={writtenPhrase}
            placeholder="Escreva a frase aqui"
          />

          <S.DeleteButtonContainer>
            <Button
              onPress={handleDeleteAccount}
              disabled={buttonDisabled}
              variant="danger"
              isLoading={isLoading}
            >
              Excluir minha conta
            </Button>
          </S.DeleteButtonContainer>
        </S.Content>
      </S.Container>
    </S.SafeArea>
  );
}

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Alert } from 'react-native';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, Button, Input } from '@/components';
import { forgotPassword } from '@/features/auth/authActions';
import { AuthNavigatorRoutesProps } from '@/routes/auth.routes';
import { theme } from '@/theme';
import { regexPatterns } from '@/utils/constants/regexPatterns';

interface ForgotPasswordFormData {
  email: string;
}

export function ForgotPassword() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const {
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm<ForgotPasswordFormData>({ defaultValues: { email: '' } });

  async function onSubmit(data: ForgotPasswordFormData) {
    try {
      await dispatch(forgotPassword({ email: data.email })).unwrap();

      Alert.alert(
        'Link Enviado',
        'Se seu email estiver correto você receberá um email em breve para recuperar a sua senha.',
        [{ text: 'OK', onPress: () => navigation.goBack() }],
      );
    } catch (error) {
      Alert.alert('Erro ao Enviar Link', `${error}`);
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
          <S.HeaderTitle>Recuperar Minha Senha</S.HeaderTitle>

          <S.HeaderDescription>
            <S.HeaderDescriptionText>
              Digite o email do seu usuário no campo abaixo e enviaremos um link
              para você recuperar a sua senha.
            </S.HeaderDescriptionText>
          </S.HeaderDescription>
        </S.HeaderContainer>

        <S.Content>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Insira seu email',
              pattern: {
                value: regexPatterns.email,
                message: 'Insira um e-mail válido',
              },
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Seu email"
                enablesReturnKeyAutomatically
                onSubmitEditing={handleSubmit(onSubmit)}
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <S.SendButtonContainer>
            <Button
              onPress={handleSubmit(onSubmit)}
              disabled={!dirtyFields.email}
              variant="primary"
              isLoading={isLoading}
            >
              Enviar Link
            </Button>
          </S.SendButtonContainer>
        </S.Content>
      </S.Container>
    </S.SafeArea>
  );
}

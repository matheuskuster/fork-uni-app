import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, View, Alert } from 'react-native';
import { HStack } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, Button, Input, Space } from '@/components';
import { addCreditCard } from '@/features/billing/creditCardActions';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';
import { mask } from '@/utils/constants/masks';
import { regexPatterns } from '@/utils/constants/regexPatterns';
import { validateExpiryDate } from '@/utils/validateExpiryDate';

interface CreditCardFormData {
  number: string;
  validate: string;
  cvv: string;
  holderName: string;
  holderCpf: string;
  cardName?: string;
}

export function CreditCard() {
  const theme = useTheme();
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();

  const validateRef = useRef<TextInput>(null);
  const cvvRef = useRef<TextInput>(null);
  const holderNameRef = useRef<TextInput>(null);
  const holderCpfRef = useRef<TextInput>(null);

  const dispatch = useDispatch();
  const { isLoadingCreditCards } = useSelector((state) => state.creditCard);
  const { user } = useSelector((state) => state.auth);
  const { home } = useSelector((state) => state.student);

  const {
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm<CreditCardFormData>({
    defaultValues: {
      number: '',
      validate: '',
      cvv: '',
      holderName: '',
      holderCpf: '',
    },
  });

  function verifyFields() {
    return (
      dirtyFields.number &&
      dirtyFields.validate &&
      dirtyFields.cvv &&
      dirtyFields.holderName &&
      dirtyFields.holderCpf
    );
  }

  async function onSubmit(data: CreditCardFormData) {
    const { cvv, holderCpf, holderName, number, validate, cardName } = data;

    const [expirationMonth, expirationYear] = validate.split('/');
    const numberCard = number.split(' ').join('');
    const cpf = holderCpf.replace(/\D/g, '');

    try {
      await dispatch(
        addCreditCard({
          cvv,
          expirationMonth,
          expirationYear:
            expirationYear.length === 2
              ? `20${expirationYear}`
              : expirationYear,
          holderName,
          number: numberCard,
          cardName,
          holderInfo: {
            complement: home!.complement,
            number: home!.number,
            zipcode: home!.zipcode,
            cpf,
            email: user!.email,
            name: holderName,
            phone: user!.phone,
          },
        }),
      ).unwrap();

      Alert.alert('Sucesso', 'Cartão adicionado foi validado!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      Alert.alert('Erro ao validar o cartão', `${error}`);
    }
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <BackButton
          containerStyle={{
            backgroundColor: `${theme.colors.gray[750]}`,
            position: 'absolute',
            left: theme.spacing[0],
            bottom: theme.spacing[4],
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <S.HeaderTitle>Crédito</S.HeaderTitle>
      </S.HeaderContainer>

      <S.ContentContainer>
        <S.Description>
          Faremos uma pequena cobrança com devolução automática.
        </S.Description>

        <Controller
          name="number"
          control={control}
          rules={{
            required: 'Insira o número do cartão',
            maxLength: { value: 19, message: 'Insira um número válido' },
            minLength: { value: 13, message: 'Insira um número válido' },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              mask={mask.card.number}
              onChangeText={onChange}
              value={value.trimStart()}
              placeholder="Número do cartão"
              autoCapitalize="none"
              autoComplete="cc-number"
              returnKeyType="next"
              onSubmitEditing={() => validateRef.current?.focus()}
              enablesReturnKeyAutomatically
              hasError={!!errors.number}
              errorMessage={errors.number?.message}
            />
          )}
        />

        <Space size={theme.spacing[4]} />

        <HStack alignment="center" style={{ gap: 16 }}>
          <View style={{ flex: 1 }}>
            <Controller
              name="validate"
              control={control}
              rules={{
                required: 'Insira a validade do cartão',
                validate: (value) => validateExpiryDate(value),
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  mask={mask.card.expiryDate}
                  onChangeText={onChange}
                  value={value.trimStart()}
                  placeholder="MM/AAAA"
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  returnKeyType="next"
                  onSubmitEditing={() => cvvRef.current?.focus()}
                  enablesReturnKeyAutomatically
                  ref={validateRef}
                  hasError={!!errors.validate}
                  errorMessage={errors.validate?.message}
                />
              )}
            />
          </View>

          <View style={{ flex: 0.7 }}>
            <Controller
              name="cvv"
              control={control}
              rules={{
                required: 'Insira o CVV',
                validate: (value) => {
                  if (value.length === 3) {
                    return true;
                  }

                  return 'Insira um CVV válido';
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  rightIcon={
                    <S.ApplyButton
                      onPress={() => {
                        Alert.alert(
                          'CVV ou CVC',
                          'Sãos os 3 dígitos atrás do seu cartão para validação online',
                        );
                      }}
                    >
                      <Feather
                        name="help-circle"
                        size={theme.sizes[5]}
                        color={theme.colors.gray['500']}
                      />
                    </S.ApplyButton>
                  }
                  mask={mask.card.cvv}
                  onChangeText={onChange}
                  value={value.trimStart()}
                  placeholder="CVV"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  returnKeyType="next"
                  onSubmitEditing={() => holderNameRef.current?.focus()}
                  enablesReturnKeyAutomatically
                  ref={cvvRef}
                  hasError={!!errors.cvv}
                  errorMessage={errors.cvv?.message}
                />
              )}
            />
          </View>
        </HStack>

        <Space size={theme.spacing[4]} />

        <Controller
          name="holderName"
          control={control}
          rules={{
            required: 'Insira o nome do titular',
            pattern: {
              value: regexPatterns.personalFullName,
              message: 'Insira um nome válido',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value.trimStart()}
              placeholder="Nome do titular"
              autoCapitalize="words"
              autoComplete="name"
              returnKeyType="next"
              onSubmitEditing={() => holderCpfRef.current?.focus()}
              enablesReturnKeyAutomatically
              ref={holderNameRef}
              hasError={!!errors.holderName}
              errorMessage={errors.holderName?.message}
            />
          )}
        />

        <Space size={theme.spacing[4]} />

        <Controller
          name="holderCpf"
          control={control}
          rules={{
            required: 'Insira seu CPF ou CNPJ',
            validate: (value) => {
              if (value.length === 11 || value.length === 14) {
                return true;
              }

              return 'Insira um CPF válido';
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              mask={mask.cpf}
              onChangeText={onChange}
              value={value.trimStart()}
              placeholder="CPF / CNPJ do titular"
              inputMode="numeric"
              returnKeyType="default"
              enablesReturnKeyAutomatically
              ref={holderCpfRef}
              hasError={!!errors.holderCpf}
              errorMessage={errors.holderCpf?.message}
            />
          )}
        />

        <Space size={theme.spacing[4]} />

        <Controller
          name="cardName"
          control={control}
          rules={{
            required: false,
            pattern: {
              value: regexPatterns.generalName,
              message: 'Não é permitido caracteres especiais',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              placeholder="Apelido do cartão (opcional)"
              autoCapitalize="words"
              autoComplete="name"
              returnKeyType="done"
              enablesReturnKeyAutomatically
              hasError={!!errors.cardName}
              errorMessage={errors.cardName?.message}
            />
          )}
        />
      </S.ContentContainer>

      <S.ButtonContainer>
        <Button
          isLoading={isLoadingCreditCards}
          disabled={!verifyFields()}
          onPress={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import {
  BackButton,
  Description,
  Input,
  NextButton,
  Select,
  SelectItem,
  Space,
  Subtitle,
  Title,
} from '@/components';
import { addPersonalData } from '@/features/signup/signupSlice';
import { SignUpNavigatorRoutesProps } from '@/routes/auth.routes';
import { gendersList } from '@/utils/constants/gendersList';
import { mask } from '@/utils/constants/masks';

interface PersonalDataForm {
  name: string;
  email: string;
  gender: string;
  anotherGender?: string;
  birth: string;
  cpf: string;
}

export function PersonalData() {
  const theme = useTheme();
  const navigation = useNavigation<SignUpNavigatorRoutesProps>();

  const emailRef = useRef<TextInput>(null);
  const cpfRef = useRef<TextInput>(null);
  const birthRef = useRef<TextInput>(null);

  const [gender, setGender] = useState<string | null>(null);
  const [genders, setGenders] = useState<SelectItem[]>(gendersList);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PersonalDataForm>({
    defaultValues: { name: '', email: '', gender: '', birth: '', cpf: '' },
  });

  function onSubmit(data: PersonalDataForm) {
    const { name, email, birth, cpf } = data;

    if (!gender) return;

    dispatch(addPersonalData({ name, email, gender, birth, cpf }));
    navigation.navigate('securityPassword');
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={navigation.goBack} />

        <S.HeaderContent>
          <Subtitle>CADASTRO</Subtitle>
          <Title color={theme.colors.gray['50']}>
            Suas informações pessoais
          </Title>
          <Description>
            Queremos saber um pouco mais sobre você! Seus dados estão protegidos
            e seguros conosco!
          </Description>
        </S.HeaderContent>
      </S.Header>

      <S.ScrollContainer>
        <S.Content>
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Insira seu nome completo',
              pattern: {
                value: /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/i,
                message: 'Insira um nome válido',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                placeholder="Nome completo"
                autoCapitalize="words"
                autoComplete="name"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
                enablesReturnKeyAutomatically
                hasError={!!errors.name}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Space size={theme.spacing[2]} />

          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Insira seu email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Insira um e-mail válido',
              },
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                ref={emailRef}
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Space size={theme.spacing[2]} />

          <S.PickerContainer>
            <Select
              value={gender}
              items={genders}
              setValue={setGender}
              setItems={setGenders}
              placeholder="Gênero"
            />
          </S.PickerContainer>

          <Space size={theme.spacing[2]} />

          {gender === 'another' ? (
            <>
              <Controller
                name="anotherGender"
                control={control}
                rules={{
                  required: 'Informe seu gênero',
                  pattern: {
                    value: /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/i,
                    message: 'Insira um nome válido',
                  },
                }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder="Qual?"
                    autoCapitalize="words"
                    returnKeyType="next"
                    onSubmitEditing={() => birthRef.current?.focus()}
                    enablesReturnKeyAutomatically
                    hasError={!!errors.anotherGender}
                    errorMessage={errors.anotherGender?.message}
                  />
                )}
              />
              <Space size={theme.spacing[2]} />
            </>
          ) : null}

          <Controller
            name="birth"
            control={control}
            rules={{
              required: 'Insira sua data de nascimento',
              pattern: {
                value: /^\d{2}\/\d{2}\/\d{4}$/,
                message: 'Insira uma data válida',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Data de nascimento"
                mask={mask.date}
                inputMode="numeric"
                autoComplete="birthdate-full"
                returnKeyType="next"
                onSubmitEditing={() => cpfRef.current?.focus()}
                enablesReturnKeyAutomatically
                ref={birthRef}
                hasError={!!errors.birth}
                errorMessage={errors.birth?.message}
              />
            )}
          />

          <Space size={theme.spacing[2]} />

          <Controller
            name="cpf"
            control={control}
            rules={{
              required: 'Insira o seu CPF',
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: 'Insira uma CPF válido',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="CPF"
                mask={mask.cpf}
                inputMode="numeric"
                ref={cpfRef}
                hasError={!!errors.cpf}
                errorMessage={errors.cpf?.message}
              />
            )}
          />
        </S.Content>
      </S.ScrollContainer>

      <S.Footer>
        <NextButton onPress={handleSubmit(onSubmit)}>Avançar</NextButton>
      </S.Footer>
    </S.Container>
  );
}

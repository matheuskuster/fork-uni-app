import { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import {
  BackButton,
  Description,
  Input,
  NextButton,
  Select,
  Subtitle,
  Title,
} from '@/components';
import { gendersList } from '@/utils/constants/gendersList';

export function PersonalData() {
  const theme = useTheme();

  const emailRef = useRef<TextInput>(null);
  const cpfRef = useRef<TextInput>(null);
  const birthRef = useRef<TextInput>(null);

  const [gender, setGender] = useState<string | null>(null);
  const [genders, setGenders] = useState(gendersList);

  return (
    <S.Container>
      <S.Header>
        <BackButton />

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
          <Input
            placeholder="Nome completo"
            autoCapitalize="words"
            autoComplete="name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
            enablesReturnKeyAutomatically
          />
          <Input
            placeholder="Email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            ref={emailRef}
          />

          <S.PickerContainer>
            <Select
              value={gender}
              items={genders}
              setValue={setGender}
              setItems={setGenders}
              placeholder="Gênero"
            />
          </S.PickerContainer>

          {gender === 'another' ? (
            <Input
              placeholder="Qual?"
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => birthRef.current?.focus()}
              enablesReturnKeyAutomatically
            />
          ) : null}
          <Input
            placeholder="Data de nascimento"
            inputMode="numeric"
            autoComplete="birthdate-full"
            returnKeyType="next"
            onSubmitEditing={() => cpfRef.current?.focus()}
            enablesReturnKeyAutomatically
            ref={birthRef}
          />
          <Input placeholder="CPF" inputMode="numeric" ref={cpfRef} />
        </S.Content>
      </S.ScrollContainer>

      <S.Footer>
        <NextButton>Avançar</NextButton>
      </S.Footer>
    </S.Container>
  );
}

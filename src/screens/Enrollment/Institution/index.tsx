import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import * as S from './styles';

import { useDispatch } from '@/app/hooks';
import {
  BackButton,
  Input,
  NextButton,
  Radio,
  Select,
  Title,
} from '@/components';
import { signOut } from '@/features/auth/authSlice';
import { PathIcon } from '@/icons/PathIcon';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';

export function Institution() {
  const dispatch = useDispatch();
  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();

  const [shift, setShift] = useState('morning');
  const [institution, setInstitution] = useState<string | null>(null);
  const [institutions, setInstitutions] = useState([
    {
      label: 'Universidade de Vila Velha - UVV',
      value: 'uvv',
    },
    {
      label: 'Universidade Federal do Espírito Santo - UFES',
      value: 'ufes',
    },
    {
      label: 'Instituto Federal do Espírito Santo - IFES',
      value: 'ifes',
    },
    {
      label: 'FAESA - Centro Educacional',
      value: 'faesa',
    },
  ]);

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => dispatch(signOut())} />

        <S.HeaderContent>
          <S.IconContainer>
            <PathIcon />
          </S.IconContainer>
          <Title color="#F0F0F0">Rota</Title>
        </S.HeaderContent>
      </S.Header>

      <S.Content>
        <S.PickerContainer>
          <Select
            value={institution}
            items={institutions}
            setValue={setInstitution}
            setItems={setInstitutions}
            placeholder="Instituição"
          />
        </S.PickerContainer>

        <Input
          placeholder="Seu CEP"
          inputMode="numeric"
          autoComplete="postal-code"
        />
        <Radio
          items={[
            { label: 'Matutino', value: 'morning' },
            { label: 'Noturno', value: 'night' },
          ]}
          onChange={(value) => setShift(value as string)}
          value={shift}
        />
      </S.Content>

      <S.Footer>
        <NextButton onPress={() => navigaton.push('price')}>
          Ver cotação
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

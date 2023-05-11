import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import {
  BackButton,
  Input,
  NextButton,
  Radio,
  Select,
  SelectItem,
  Title,
} from '@/components';
import { signOut } from '@/features/auth/authSlice';
import { getQuotation } from '@/features/quotation/quotationActions';
import { setShift } from '@/features/quotation/quotationSlice';
import { useInstitutions } from '@/hooks/useInstitutions';
import { PathIcon } from '@/icons/PathIcon';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';

interface GetQuotationFormData {
  institutionId: string;
  cep: string;
  shift: string;
}

export function Institution() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { data, isLoading } = useInstitutions();
  const navigaton = useNavigation<EnrollmentNavigatorRoutesProps>();

  const [institution, setInstitution] = useState<string | null>(null);
  const [institutions, setInstitutions] = useState<SelectItem[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GetQuotationFormData>({
    defaultValues: { shift: 'morning' },
  });

  const { foundQuotation, isFetching } = useSelector(
    (state) => state.quotation,
  );

  const onSubmit = (data: GetQuotationFormData) => {
    const { cep, shift } = data;

    // TODO: create a popup to warn user to choose an institution
    if (!institution) return;

    setSubmitted(true);

    dispatch(setShift(shift));
    dispatch(getQuotation({ cep, institutionId: institution }));
  };

  useEffect(() => {
    console.log(foundQuotation);
    if (foundQuotation && submitted && !isFetching) {
      navigaton.navigate('price');
    } else if (!foundQuotation && submitted && !isFetching) {
      // TODO: create a popup to show the user that there is no quotation
    }
  }, [isFetching]);

  useEffect(() => {
    if (data) {
      setInstitutions(
        data.map((institution) => ({
          label: `${institution.name} (${institution.acronym})`,
          value: institution.id,
        })),
      );
    }
  }, [data]);

  if (isLoading) return null;

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => dispatch(signOut())} />

        <S.HeaderContent>
          <S.IconContainer>
            <PathIcon />
          </S.IconContainer>
          <Title color={theme.colors.gray[50]}>Rota</Title>
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

        <Controller
          control={control}
          name="cep"
          rules={{
            required: 'Insira seu CEP',
            pattern: {
              value: /^\d{5}-?\d{3}$/,
              message: 'Insira um CEP válido',
            },
          }}
          render={({ field: { value, onChange } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              placeholder="Seu CEP"
              inputMode="numeric"
              autoComplete="postal-code"
              hasError={!!errors.cep}
              errorMessage={errors.cep?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="shift"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <Radio
              items={[
                { label: 'Matutino', value: 'morning' },
                { label: 'Noturno', value: 'night' },
              ]}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </S.Content>

      <S.Footer>
        <NextButton isLoading={isFetching} onPress={handleSubmit(onSubmit)}>
          Ver cotação
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

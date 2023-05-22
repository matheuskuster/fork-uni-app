import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Alert } from 'react-native';
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
import { WarningCircleIcon } from '@/icons/WarningCircleIcon';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';
import { mask } from '@/utils/constants/masks';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GetQuotationFormData>({
    defaultValues: { shift: 'morning' },
  });

  const { isFetching } = useSelector((state) => state.quotation);

  async function onSubmit(data: GetQuotationFormData) {
    const { cep, shift } = data;

    if (!institution) {
      Alert.alert('Erro ao buscar cotação', 'Escolha uma instituição');
      return;
    }

    dispatch(setShift(shift));
    try {
      await dispatch(
        // TODO: remove the replace from CEP in the future
        getQuotation({ cep: cep.replace('-', ''), institutionId: institution }),
      ).unwrap();

      navigaton.navigate('price');
    } catch (error) {
      const message = error as string;

      if (message.includes('Cep')) {
        Alert.alert('Erro ao buscar cotação', `${error}`);
      } else {
        setIsModalVisible(true);
      }
    }
  }

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
      <S.ModalContainer visible={isModalVisible}>
        <S.ContentContainer>
          <WarningCircleIcon />
          <S.Title>Ainda não chegamos ai...</S.Title>
          <S.Description>
            Sinto muito, mas nós ainda não temos nenhuma cotação disponível da
            sua região para essa instituição.
          </S.Description>
          <S.ButtonContainer>
            <S.ButtonText onPress={() => setIsModalVisible(false)}>
              Ok, tudo bem
            </S.ButtonText>
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.ModalContainer>

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
              mask={mask.zipCode}
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

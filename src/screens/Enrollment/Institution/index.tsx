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
  Space,
  Title,
} from '@/components';
import { signOut } from '@/features/auth/authSlice';
import { getQuotation } from '@/features/quotation/quotationActions';
import { setShift } from '@/features/quotation/quotationSlice';
import { useInstitutions } from '@/hooks/useInstitutions';
import { PathIcon } from '@/icons/PathIcon';
import { EnrollmentNavigatorRoutesProps } from '@/routes/enrollment.routes';
import { mask } from '@/utils/constants/masks';
import { regexPatterns } from '@/utils/constants/regexPatterns';

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

  const { isFetching, foundQuotation, zipcodeAddress } = useSelector(
    (state) => state.quotation,
  );

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
    if (foundQuotation) {
      navigaton.navigate('price');
    } else if (zipcodeAddress) {
      setIsModalVisible(true);
    }
  }, [zipcodeAddress, foundQuotation]);

  useEffect(() => {
    if (data) {
      setInstitutions(
        data.map((institution) => ({
          label: `${institution.name} (${institution.acronym})`,
          value: institution.id,
        })),
      );
    } else {
      setInstitutions([
        { label: 'Nenhuma instituição encontrada', value: 'no-data' },
      ]);
    }
  }, [data]);

  if (isLoading) return null;

  return (
    <S.Container>
      <S.Modal visible={isModalVisible}>
        <S.ModalContainer>
          <S.ContentContainer>
            <PathIcon color={theme.colors.gray[400]} size={144} />
            <S.Title>Ainda não chegamos ai</S.Title>
            <S.Description>
              Sinto muito, mas nós ainda não temos nenhuma cotação nesse turno
              disponível da sua região para essa instituição. {'\n\n'} Mas não
              se preocupe. Nós iremos avaliar a sua solicitação para podermos
              disponibilizar esse serviço o mais breve possível!
            </S.Description>
          </S.ContentContainer>
          <S.ButtonContainer>
            <S.ButtonText onPress={() => setIsModalVisible(false)}>
              Ok, tudo bem
            </S.ButtonText>
          </S.ButtonContainer>
        </S.ModalContainer>
      </S.Modal>

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
        <Select
          value={institution}
          items={institutions}
          setValue={setInstitution}
          setItems={setInstitutions}
          placeholder="Instituição"
        />

        <Space size={theme.spacing[2]} />

        <Controller
          control={control}
          name="cep"
          rules={{
            required: 'Insira seu CEP',
            pattern: {
              value: regexPatterns.cep,
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

        <Space size={theme.spacing[2]} />

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

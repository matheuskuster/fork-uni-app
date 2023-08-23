import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { VStack } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import { CardIcon } from './CardIcon';
import { Option } from './Option';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, Button } from '@/components';
import { myCreditCards } from '@/features/billing/creditCardActions';
import { creditCardsSelectors } from '@/features/billing/creditCardSlice';
import { BarcodeIcon } from '@/icons/BarcodeIcon';
import { CardAddIcon } from '@/icons/CardAddIcon';
import { PixIcon } from '@/icons/PixIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export function Method() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();
  const [selectedId, setSelectedId] = useState('');

  const myCards = useSelector(creditCardsSelectors.selectAll);
  const { isLoadingCreditCards } = useSelector((state) => state.creditCard);

  useEffect(() => {
    try {
      dispatch(myCreditCards());
    } catch (error) {
      Alert.alert('Erro ao buscar cartões', `${error}`);
    }
  }, []);

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
        <S.HeaderTitle>Método de Pagamento</S.HeaderTitle>
      </S.HeaderContainer>

      <S.ContentContainer>
        <S.Description>
          Selecione ou adicione uma nova forma de pagamento
        </S.Description>

        {isLoadingCreditCards ? (
          <>
            <Option
              icon={<S.IconContainer />}
              title=""
              isLoading={isLoadingCreditCards}
            />
            <Option
              icon={<S.IconContainer />}
              title=""
              isLoading={isLoadingCreditCards}
            />
          </>
        ) : (
          <VStack>
            <>
              <FlatList
                data={myCards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  const isSelected = item.id === selectedId;
                  return (
                    <Option
                      key={item.id}
                      icon={<CardIcon flag={item.brand} />}
                      isSelected={isSelected}
                      title={
                        item.name
                          ? item.name
                          : capitalizeFirstLetter(item.brand)
                      }
                      observation={`Final ${item.lastFourDigits}`}
                      onPress={() => setSelectedId(item.id)}
                    />
                  );
                }}
                extraData={selectedId}
                scrollEnabled={false}
                style={{ width: '100%' }}
              />
            </>
            <Option
              icon={
                <S.IconContainer>
                  <PixIcon />
                </S.IconContainer>
              }
              title="Pix"
            />
            <Option
              icon={
                <S.IconContainer>
                  <BarcodeIcon />
                </S.IconContainer>
              }
              title="Boleto Bancário"
            />
            <Option
              onPress={() => navigation.navigate('creditCard')}
              icon={
                <S.IconContainer>
                  <CardAddIcon />
                </S.IconContainer>
              }
              title="Adicionar cartão"
            />
          </VStack>
        )}
      </S.ContentContainer>

      <S.ButtonContainer>
        <Button>Selecionar</Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

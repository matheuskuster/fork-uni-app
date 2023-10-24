import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { VStack } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import { CardChangeModal } from './CardChangeModal';
import { Option } from './Option';
import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { BackButton, Button, CardIcon } from '@/components';
import { myCreditCards } from '@/features/billing/creditCardActions';
import { creditCardsSelectors } from '@/features/billing/creditCardSlice';
import {
  selectPaymentMethod,
  SubscriptionMethod,
} from '@/features/subscription/subscriptionSlice';
import { CardAddIcon } from '@/icons/CardAddIcon';
import { PaymentNavigatorRoutesProps } from '@/routes/payment.routes';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

export function Method() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation<PaymentNavigatorRoutesProps>();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectCardId, setSelectCardId] = useState<string | null>(null);

  const myCards = useSelector(creditCardsSelectors.selectAll);
  const { isLoadingCreditCards } = useSelector((state) => state.creditCard);
  const { id, creditCard } = useSelector((state) => state.subscription);

  useEffect(() => {
    try {
      dispatch(myCreditCards());
    } catch (error) {
      Alert.alert('Erro ao buscar cartões', `${error}`);
    }
  }, []);

  useEffect(() => {
    if (creditCard) {
      const currentCard = myCards.find((card) => card.id === creditCard.id);

      setSelectCardId(currentCard?.id ?? null);
    }
  }, []);

  function handleSelectCard() {
    if (selectCardId) {
      const card = myCards.find((card) => card.id === selectCardId);

      if (id) {
        setIsModalVisible(true);
      } else {
        dispatch(
          selectPaymentMethod({
            creditCard: card,
            method: SubscriptionMethod.CREDIT_CARD,
          }),
        );

        navigation.goBack();
      }
    }
  }

  return (
    <S.Container>
      <CardChangeModal
        cardId={selectCardId}
        visible={isModalVisible}
        setVisible={setIsModalVisible}
      />

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
                  const isSelected = item.id === selectCardId;
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
                      onPress={() => setSelectCardId(item.id)}
                    />
                  );
                }}
                extraData={selectCardId}
                scrollEnabled={false}
                style={{ width: '100%' }}
              />
            </>
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
        <Button disabled={!selectCardId} onPress={handleSelectCard}>
          Selecionar
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

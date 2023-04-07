import { VStack } from 'react-native-stacks';
import { useTheme } from 'styled-components';

import { CardIcon } from './CardIcon';
import { Option } from './Option';
import * as S from './styles';

import { BackButton, Button } from '@/components';
import { BarcodeIcon } from '@/icons/BarcodeIcon';
import { CardAddIcon } from '@/icons/CardAddIcon';
import { PixIcon } from '@/icons/PixIcon';

export function Method() {
  const theme = useTheme();

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
        />
        <S.HeaderTitle>Método de Pagamento</S.HeaderTitle>
      </S.HeaderContainer>

      <S.ContentContainer>
        <S.Description>
          Selecione ou adicione uma nova forma de pagamento
        </S.Description>

        <VStack spacing={2}>
          <Option
            icon={<CardIcon flag="visa" />}
            title="Crédito Visa"
            observation="Final 8690"
          />
          <Option
            icon={<CardIcon flag="master" />}
            title="Crédito Mastercard"
            observation="Final 4002"
          />
          <Option
            icon={<CardIcon flag="elo" />}
            title="Crédito Elo"
            observation="Final 8922"
          />
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
            icon={
              <S.IconContainer>
                <CardAddIcon />
              </S.IconContainer>
            }
            title="Adicionar cartão"
          />
        </VStack>
      </S.ContentContainer>

      <S.ButtonContainer>
        <Button>Selecionar</Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

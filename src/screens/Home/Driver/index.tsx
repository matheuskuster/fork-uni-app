import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import { getDriverById } from '@/features/driver/driverActions';
import { getRouteById } from '@/features/route/routeActions';
import { StudentStatusProps } from '@/features/student/studentSlice';
import { DollarSign } from '@/icons/DollarSign';
import { UniLogo } from '@/icons/UniIcon';
import { VanIcon } from '@/icons/VanIcon';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';

export function Driver() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { status, routeId } = useSelector((state) => state.student);
  const { driverId, isSearchingRoute } = useSelector((state) => state.route);
  const { name, isSearchingDriver } = useSelector((state) => state.driver);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const linearGradientColors = [
    theme.colors.green[600],
    theme.colors.green[400],
    theme.colors.green[400],
  ];

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  useEffect(() => {
    if (routeId) {
      dispatch(getRouteById({ id: routeId }));
    }
  }, [routeId]);

  useEffect(() => {
    if (driverId) {
      dispatch(getDriverById({ id: driverId }));
    }
  }, [driverId]);

  if (isSearchingDriver || isSearchingRoute) {
    return (
      <S.DriverContainer>
        <ShimmerPlaceHolder
          style={{
            borderRadius: 35,
            width: 70,
            height: 70,
          }}
          shimmerColors={linearGradientColors}
          visible={!isSearchingDriver}
        />
        <S.DriverTextContainer>
          <ShimmerPlaceHolder
            style={{
              borderRadius: theme.spacing[2],
              width: theme.spacing[40],
              marginBottom: theme.spacing[1],
              height: theme.spacing[6],
            }}
            shimmerColors={linearGradientColors}
            visible={!isSearchingDriver}
          />
          <ShimmerPlaceHolder
            style={{
              borderRadius: theme.spacing[2],
              width: theme.spacing[32],
              height: theme.spacing[3],
            }}
            shimmerColors={linearGradientColors}
            visible={!isSearchingDriver}
          />
        </S.DriverTextContainer>
      </S.DriverContainer>
    );
  }

  switch (status) {
    case StudentStatusProps.PENDING_ROUTE_ASSIGNMENT:
      return (
        <S.DriverContainer onPress={() => setIsModalVisible(true)}>
          <S.Modal visible={isModalVisible}>
            <S.ModalContainer>
              <S.ContentContainer>
                <VanIcon color={theme.colors.gray[400]} size={144} />
                <S.Title>Estamos procurando a sua van</S.Title>
                <S.Description>
                  Estamos em busca de uma van para fazer o seu transporte. Assim
                  que conseguirmos, você será notificado e poderá prosseguir com
                  o pagamento. {'\n\n'} Se tiver qualquer dúvida, entre em
                  contato conosco pelo suporte.
                </S.Description>
              </S.ContentContainer>
              <S.ButtonContainer>
                <S.ButtonText onPress={() => setIsModalVisible(false)}>
                  Entendi
                </S.ButtonText>
              </S.ButtonContainer>
            </S.ModalContainer>
          </S.Modal>

          <S.ImageContainer>
            <VanIcon />
          </S.ImageContainer>
          <S.DriverTextContainer>
            <S.DriverNameText>Seu motorista</S.DriverNameText>
            <S.DriverDescriptionText>
              ESTAMOS PROCURANDO A SUA VAN
            </S.DriverDescriptionText>
          </S.DriverTextContainer>
        </S.DriverContainer>
      );
    case StudentStatusProps.PENDING_ROUTE_ACCEPTANCE:
      return (
        <S.DriverContainer
          onPress={() => navigation.navigate('payment', { screen: 'revision' })}
        >
          <S.ImageContainer>
            <DollarSign />
          </S.ImageContainer>
          <S.DriverTextContainer>
            <S.DriverNameText>Encontramos!</S.DriverNameText>
            <S.DriverDescriptionText>
              CLIQUE AQUI E FINALIZE O PAGAMENTO
            </S.DriverDescriptionText>
          </S.DriverTextContainer>
        </S.DriverContainer>
      );
    default:
      return (
        <S.DriverContainer>
          <S.ImageContainer>
            <UniLogo />
          </S.ImageContainer>
          <S.DriverTextContainer>
            <S.DriverNameText>{name}</S.DriverNameText>
            <S.DriverDescriptionText>
              MOTORISTA E PARCEIRO
            </S.DriverDescriptionText>
          </S.DriverTextContainer>
        </S.DriverContainer>
      );
  }
}

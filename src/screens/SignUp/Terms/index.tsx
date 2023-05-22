import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { useDispatch, useSelector } from '@/app/hooks';
import {
  BackButton,
  Description,
  NextButton,
  Subtitle,
  Title,
} from '@/components';
import { signUpUser } from '@/features/signup/signupActions';

export function Terms() {
  const theme = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isLoading, isCreating, signUp } = useSelector((state) => {
    return {
      signUp: state.signup,
      error: state.signup.error,
      isLoading: state.auth.isLoading,
      isCreating: state.signup.isCreating,
    };
  });

  async function onSubmit() {
    try {
      await dispatch(
        signUpUser({
          cpf: signUp.cpf!,
          name: signUp.name!,
          email: signUp.email!,
          birthDate: signUp.birthDate ?? undefined,
          gender: signUp.gender ?? undefined,
          password: signUp.password ?? undefined,
          phone: signUp.phone!,
          googleId: signUp.googleId ?? undefined,
        }),
      ).unwrap();
    } catch (error) {
      Alert.alert('Erro ao finalizar cadastro', `${error}`);
    }
  }

  return (
    <S.Container scrollEnabled={false} keyboardDismissMode="interactive">
      <S.Header>
        <BackButton onPress={navigation.goBack} />

        <S.HeaderContent>
          <Subtitle>CADASTRO</Subtitle>
          <Title color={theme.colors.gray['50']}>
            Leia os termos e condições de uso
          </Title>
          <Description>
            Para utilizar o Vou de Van Universitário e leia os termos e
            condições de uso.
          </Description>
        </S.HeaderContent>
      </S.Header>

      <S.Body>
        <S.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh
          mauris, consequat vel lectus quis, vestibulum tempus enim. Praesent
          vitae massa tortor. Vivamus sapien dolor, consequat vel lacus cursus,
          vulputate vestibulum mauris. Donec fringilla, enim vel auctor
          dignissim, metus felis convallis velit, at gravida urna leo nec
          tortor. Nullam dapibus, quam vitae viverra commodo, dui purus congue
          tortor, in aliquet ante sapien vitae risus. Integer velit purus,
          cursus vel justo in, volutpat congue arcu. Aliquam id risus metus.
          Donec sed hendrerit nisi. Proin consectetur consequat lacinia.
          Curabitur accumsan cursus odio vel pharetra. Morbi eget diam quis
          ligula congue finibus. Cras velit justo, ullamcorper sed ultricies
          semper, accumsan lacinia neque. Cras aliquet suscipit metus vitae
          pellentesque. Nullam eu posuere mi. Proin elit nibh, egestas ac
          sagittis non, mollis non ligula. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Suspendisse
          potenti. Pellentesque venenatis lorem malesuada lectus sodales
          pharetra. Proin condimentum, arcu at bibendum auctor, orci nunc
          hendrerit lectus, ac auctor purus urna vel lacus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Cras non ornare
          metus, et tristique lacus. Aliquam ultricies tempus lacus, scelerisque
          aliquet quam. Aliquam eros ante, volutpat scelerisque elementum
          iaculis, gravida a lorem. Sed et nunc ac velit ultricies ornare. Ut id
          lorem nec turpis tincidunt blandit id eget lacus. Donec sed faucibus
          lacus, at dignissim erat. Sed elit neque, tempor a nisl non, hendrerit
          pellentesque justo. Nam ultrices, ante quis feugiat imperdiet, lectus
          sapien dictum enim, at tempus enim massa non sem. Pellentesque ut arcu
          sed nunc interdum lobortis. Mauris malesuada ex volutpat, bibendum
          nibh et, vehicula mi. Nunc interdum ullamcorper elit eu iaculis. Sed a
          malesuada odio, ac maximus neque. Proin volutpat feugiat sodales. In
          accumsan, ligula ut consectetur feugiat, est felis volutpat risus, id
          tempor dolor erat vitae sapien. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Phasellus consequat euismod consectetur.
          Pellentesque nec tortor ullamcorper, convallis enim eu, pulvinar sem.
          Vivamus ultrices lobortis malesuada. Nulla at vehicula libero.
          Suspendisse in tempor tellus. Quisque ultrices turpis nec condimentum
          molestie. Nunc molestie enim lorem, vel tempor quam fermentum in.
        </S.Content>
      </S.Body>

      <S.Footer>
        <NextButton isLoading={isLoading || isCreating} onPress={onSubmit}>
          Li e concordo com os termos
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

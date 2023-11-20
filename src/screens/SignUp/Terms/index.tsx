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
            Para utilizar o Vou de Van Universitário, leia os termos e condições
            de uso.
          </Description>
        </S.HeaderContent>
      </S.Header>

      <S.Body>
        <S.ContentContainer>
          <S.TitleContent>1. OBJETO</S.TitleContent>
          <S.Content>
            1.1 - Constituem objeto dos TERMOS DE USO o acesso e/ou uso, por
            você ou por quaisquer terceiros, sejam eles pessoas naturais ou
            jurídicas, domiciliadas no Brasil ou no exterior, do seu site de
            internet, conteúdos, bens e serviços produzidos, disponibilizados,
            distribuídos ou de qualquer forma fornecidos diretamente ou através
            da VOU DE VAN -UNI (os quais passarão a ser coletivamente chamados
            de SERVIÇOS nos presentes TERMOS DE USO).
          </S.Content>
          <S.TitleContent>2. DESCRIÇÃO DOS SERVIÇOS</S.TitleContent>
          <S.Content>
            2.1 - A VOU DE VAN - UNI é uma empresa de tecnologia cujos SERVIÇOS,
            são prestados através de site de internet e aplicativo de celular:
          </S.Content>
          <S.SubContent>
            a) conectando uma pessoa que deseja se deslocar de sua
            residência/trabalho até a sua universidade à outras pessoas que
            possuam o mesmo desejo, permitindo a formação de grupos com
            interesses comuns;
          </S.SubContent>
          <S.SubContent>
            b) conectando, ainda, esses grupos aos motoristas parceiros
            cadastrados no banco de dados da VOU DE VAN - UNI e que prestam
            serviços de transporte privado coletivo de passageiros na modalidade
            escolar/universitária. Assim, a VOU DE VAN - UNI atua intermediando
            grupos de pessoas que possuem o interesse de utilizar o transporte
            universitário.
          </S.SubContent>
          <S.Content>2.2 – O USUÁRIO ENTENDE E DECLARA QUE:</S.Content>
          <S.SubContent>
            a) A VOU DE VAN - UNI não presta e não assegura a prestação de
            qualquer serviço de transporte de pessoas;
          </S.SubContent>
          <S.SubContent>
            b) A VOU DE VAN - UNI não possui uma frota de veículos, prestando
            exclusivamente um serviço de intermediação voltado à facilitação da
            contratação do serviço de transporte universitário perante um
            motorista parceiro cadastrado em seu banco de dados;
          </S.SubContent>
          <S.SubContent>
            C) Os motoristas parceiros são terceiros independentes que não
            possuem qualquer forma de vínculo empregatício, societário ou de
            subordinação com a VOU DE VAN - UNI, nem de qualquer de suas
            afiliadas e sua controladora.
          </S.SubContent>
          <S.Content>
            2.3 - O Serviço não deve ser utilizado para qualquer finalidade que
            não as expressamente autorizadas por este Termo. O Usuário se
            compromete, sob as penas da lei, a utilizar sua conta do site e do
            aplicativo apenas de maneira e para fins estritamente legais,
            legítimos e permitidos por estes Termos de Uso.
          </S.Content>
          <S.TitleContent>3. TITULARIDADE SOBRE OS SERVIÇOS</S.TitleContent>
          <S.Content>
            3.1 - Todas as marcas, programas de computador, domínios, registros,
            websites, aplicativos, códigos-fonte e/ou quaisquer outras obras
            intelectuais ou industriais necessárias à prestação dos SERVIÇOS e
            que tenham sido desenvolvidos e/ou fornecidos pela VOU DE VAN - UNI
            pertencem exclusivamente a ela, pelos prazos definidos na legislação
            aplicável a cada um desses elementos.
          </S.Content>
          <S.Content>
            3.2 - O cumprimento destes TERMOS DE USO confere ao usuário, a
            título precário e revogável a qualquer momento, uma outorga para que
            usufrua, na forma de licença pessoal, não comercial, não exclusiva,
            e não passível de sublicença ou transferência, exclusivamente de:
          </S.Content>
          <S.SubContent>
            a) acesso e uso do site e do aplicativo da VOU DE VAN - UNI
            exclusivamente para uso dos SERVIÇOS nele oferecidos;
          </S.SubContent>
          <S.SubContent>
            b) acesso e uso de qualquer conteúdo, informação e material
            correlato próprio ou de terceiros que a VOU DE VAN - UNI venha a
            disponibilizar por meio dos SERVIÇOS.
          </S.SubContent>
          <S.Content>3.3 – O usuário não poderá:</S.Content>
          <S.SubContent>
            a) remover qualquer aviso de direito autoral, direito de marca ou
            outro aviso de direito de propriedade de qualquer parte dos
            SERVIÇOS;
          </S.SubContent>
          <S.SubContent>
            b) reproduzir, modificar, preparar obras derivadas, distribuir,
            licenciar, locar, vender, revender, transferir, exibir, veicular,
            transmitir ou, de qualquer outro modo, explorar os SERVIÇOS, exceto
            da forma expressamente permitida pela VOU DE VAN - UNI;
          </S.SubContent>
          <S.SubContent>
            c) descompilar, realizar engenharia reversa ou desmontar os SERVIÇOS
            fora das estritas hipóteses permitidas pela legislação aplicável;
          </S.SubContent>
          <S.SubContent>
            d) conectar, espelhar ou recortar qualquer parte dos SERVIÇOS;
          </S.SubContent>
          <S.SubContent>
            e) fazer ou lançar quaisquer programas ou scripts com a finalidade
            de fazer scraping, indexação, pesquisa ou qualquer outra forma de
            obtenção de dados de qualquer parte dos SERVIÇOS, ou de
            sobrecarregar ou prejudicar indevidamente a operação e/ou
            funcionalidade de qualquer aspecto dos SERVIÇOS; ou
          </S.SubContent>
          <S.SubContent>
            f) tentar obter acesso não autorizado aos SERVIÇOS ou ao banco de
            dados mantido pela VOU DE VAN - UNI, tampouco prejudicar qualquer
            aspecto dos SERVIÇOS ou seus sistemas ou redes correlatas.
          </S.SubContent>
          <S.Content>
            3.4 - Exceto pela licença limitada concedida acima, estes TERMOS DE
            USO não outorgam nem conferem qualquer direito sobre os SERVIÇOS,
            tampouco permitem usar ou de qualquer modo fazer referência a nomes
            societários, logotipos, nomes de produtos ou de serviços, marcas
            comerciais ou marcas de serviço da VOU DE VAN - UNI.
          </S.Content>
          <S.Content>
            3.5 - Quaisquer direitos não expressamente outorgados por estes
            TERMOS DE USO são reservados à VOU DE VAN - UNI.
          </S.Content>
          <S.TitleContent>4. SERVIÇOS E CONTEÚDOS DE TERCEIROS</S.TitleContent>
          <S.Content>
            4.1 - A VOU DE VAN – UNI não é uma empresa de transporte e os
            SERVIÇOS por ela oferecidos são de intermediação, sendo certo que
            todo e qualquer serviço de transporte prestado aos grupos
            organizados com a ajuda de sua plataforma será sempre prestado por
            terceiros independentes (motoristas parceiros), devidamente
            registrados, fiscalizados e autorizados pelos órgãos reguladores
            competentes para exercer a atividade de transporte privado coletivo
            de passageiros. Os motoristas parceiros são terceiros independentes
            que não possuem qualquer forma de vínculo empregatício, societário
            ou de subordinação com a VOU DE VAN - UNI, nem de qualquer de suas
            afiliadas e sua controladora, e serão os responsáveis exclusivos
            pelo cumprimento de suas obrigações e garantias na forma da lei.
          </S.Content>
          <S.Content>
            4.2 - Além dos motoristas parceiros acima mencionados, os SERVIÇOS
            poderão ser disponibilizados e acessados em conexão com serviços e
            conteúdos promocionais e comerciais de terceiros, inclusive
            publicidade, sobre os quais a VOU DE VAN – UNI não exercerá
            controle. Isso não implicará qualquer forma de endosso ou assunção
            de responsabilidade.
          </S.Content>
          <S.Content>
            4.3 - Termos de uso e políticas de privacidade diferentes poderão
            ser aplicáveis ao uso dos serviços e conteúdo de terceiros.
          </S.Content>
          <S.Content>
            4.4 - Apple Inc., Google, Inc., Microsoft Corporation ou BlackBerry
            Limited e/ou suas subsidiárias e afiliadas internacionais serão
            terceiros beneficiários destes TERMOS DE USO, caso você acesse os
            SERVIÇOS usando aplicativos desenvolvidos para dispositivos móveis
            baseados em Apple iOS, Android, Microsoft Windows, ou Blackberry,
            respectivamente. Esses terceiros beneficiários não são partes destes
            TERMOS DE USO ou de qualquer outra relação contratual desenvolvida
            entre a VOU DE VAN – UNI e o usuário, e não são responsáveis pela
            prestação dos SERVIÇOS ou por qualquer forma de suporte aos
            SERVIÇOS. O acesso dos usuários aos SERVIÇOS usando esses
            dispositivos está sujeito às condições estabelecidas nos termos de
            serviços dos respectivos terceiros beneficiários.
          </S.Content>
          <S.TitleContent>
            5. REQUISITOS E REGRAS PARA UTILIZAÇÃO DOS SERVIÇOS
          </S.TitleContent>
          <S.Content>
            5.1 - Para utilizar os SERVIÇOS da VOU DE VAN - UNI o usuário deverá
            ser civilmente capaz.
          </S.Content>
          <S.Content>
            5.2 - Para utilizar os SERVIÇOS da VOU DE VAN - UNI o usuário deverá
            concordar e cumprir com os presentes TERMOS DE USO.
          </S.Content>
          <S.Content>
            5.3 - Para utilizar os SERVIÇOS o usuário deverá efetuar seu
            cadastro junto à VOU DE VAN/ VOU DE VAN - UNI, via site, aplicativo
            ou qualquer outro meio que ela venha a exigir, fornecendo com
            absoluto respeito à verdade todas as informações que lhe forem
            solicitadas.
          </S.Content>
          <S.SubContent>
            5.3.1 - O cadastro exige que o usuário apresente à VOU DE VAN/ VOU
            DE VAN - UNI certas informações pessoais, tais como seu nome,
            endereço, número de telefone celular, dados de documento de
            identidade e idade, assim como pelo menos um método de pagamento
            válido.
          </S.SubContent>
          <S.SubContent>
            5.3.2 – O usuário concorda em manter informações corretas, completas
            e atualizadas em sua conta. Se o usuário não mantiver informações
            corretas, completas e atualizadas em sua conta, inclusive, se o
            método de pagamento informado for inválido ou expirado, o usuário
            poderá ficar impossibilitado de acessar e usar os SERVIÇOS.
          </S.SubContent>
          <S.SubContent>
            5.3.3 – O usuário é responsável por todas as atividades realizadas
            na sua conta e concorda em manter sempre a segurança e o sigilo do
            nome de usuário e senha por ele escolhidos.
          </S.SubContent>
          <S.SubContent>
            5.3.4 – Os usuários que forem identificados utilizando o nome, marca
            e/ou identidade visual da VOU DE VAN - UNI em perfis “fakes” serão
            imediatamente banidos da plataforma, bem como poderão ser
            responsabilizados na esfera civil e criminal pelos seus atos, de
            acordo com a circunstância fática.
          </S.SubContent>
          <S.Content>
            5.4 - Quando desejar contratar um dos SERVIÇOS ofertados, o usuário
            deverá informar todos os dados de identificação que a VOU DE VAN -
            UNI vier a exigir.
          </S.Content>
          <S.Content>
            5.5 - A vaga no veículo dependerá do pagamento da mesma, que
            ocorrerá, exclusivamente, pelos meios disponibilizados pela VOU DE
            VAN - UNI e somente será garantida após a devida compensação
            bancária.
          </S.Content>
          <S.Content>
            5.6 – A aquisição de vaga no veículo implica outorga de poderes para
            que a VOU DE VAN - UNI celebre, em seu nome (ou seja, em nome do
            usuário), contrato de transporte escolar/universitário com os
            motoristas parceiros devidamente registrado, fiscalizado e
            autorizado pelos órgãos competentes e que atenda às especificações
            de origem, destino e horário, bem como aos critérios extras de
            qualidade e segurança eventualmente exigidos pela VOU DE VAN - UNI.
          </S.Content>
          <S.Content>
            5.7 – Em todos os embarques, o usuário deverá sempre portar o
            documento de identificação informado para a VOU DE VAN - UNI quando
            da elaboração de seu cadastro, e deverá apresentálo sempre que
            exigido por autoridades e órgãos policiais e de fiscalização, bem
            como pelos motoristas parceiros.
          </S.Content>
          <S.Content>5.8 - Nas viagens, o usuário compromete-se a:</S.Content>
          <S.SubContent>
            a) cumprir, durante o trajeto, todas as regras aplicáveis aos
            passageiros de serviços de transporte, bem como as regras próprias
            que vierem a ser definidas pelo motorista parceiro responsável pelo
            fornecimento deste serviço, que não se confunde com a VOU DE VAN -
            UNI;
          </S.SubContent>
          <S.SubContent>
            b) apresentar-se e manter-se sóbrio e livre de efeitos de quaisquer
            substâncias psicotrópicas, de modo a estar sempre apto a atender
            orientações de segurança e de resposta a sinistros que eventualmente
            venham a ser emanadas pelos responsáveis pelo serviço de transporte
            e seus empregados e prepostos, podendo ser impedido de embarcar ou
            de permanecer no veículo sem direito a qualquer indenização ou
            ressarcimento se, a critério dos responsáveis pelo serviço de
            transporte e seus empregados e prepostos, represente risco para a
            segurança do deslocamento e dos demais passageiros;
          </S.SubContent>
          <S.SubContent>
            c) tratar os demais passageiros e o motorista parceiro com
            urbanidade e respeito, não sendo tolerada qualquer conduta
            discriminatória ou vexatória, sendo certo que eventuais reclamações
            de terceiros quanto ao comportamento do usuário poderão, a exclusivo
            critério da VOU DE VAN - UNI, implicar na suspensão ou até mesmo na
            exclusão do usuário da plataforma e proibição temporária ou
            definitiva de uso dos SERVIÇOS ofertados pela VOU DE VAN - UNI.
          </S.SubContent>
          <S.TitleContent>
            6. CADASTRO DO USUÁRIO PARA UTILIZAÇÃO DOS SERVIÇOS DISPONIBILIZADOS
            NO SITE E NO APLICATIVO DA VOU DE VAN - UNI
          </S.TitleContent>
          <S.Content>
            6.1 - Para utilizar os SERVIÇOS, o usuário deve registrar-se
            diretamente no site da VOU DE VAN (www.voudevanes.com.br) ou no site
            da VOU DE VAN – UNI (https://voudevanuni.com.br/) e manter uma conta
            pessoal de Usuário de Serviços (“Conta”), preenchendo
            obrigatoriamente os campos de cadastro exigidos. O perfil do usuário
            é exclusivo e intransferível. Em caso de não confirmação de seus
            dados, o acesso do usuário aos SERVIÇOS poderá ser bloqueado, a
            exclusivo critério da VOU DE VAN - UNI.
          </S.Content>
          <S.SubContent>
            6.1.1. Para criar e manter uma conta e utilizar os SERVIÇOS, o
            usuário declara ter idade mínima de 18 anos ou ter obtido
            autorização de seus pais, tutores ou responsáveis legais, os quais
            são responsáveis por aceitar estes termos em seu nome, acompanhar e
            avaliar a sua adequada utilização do site e dos serviços ofertados
            pela VOU DE VAN - UNI.
          </S.SubContent>
          <S.SubContent>
            6.1.2 - O Usuário, caso tenha ao menos 18 anos de idade, ou seus
            pais, tutores ou responsáveis legais, nos demais casos,
            responderá(ão) exclusivamente pela veracidade das informações
            declaradas e inseridas, obrigando-se a manter informações válidas,
            atualizadas e corretas. As informações da conta são de exclusiva
            responsabilidade de quem as inseriu. No caso de acarretarem danos ou
            prejuízo de qualquer espécie, as medidas cabíveis podem ser tomadas
            pela VOU DE VAN - UNI a fim de resguardar seus interesses e a
            integridade dos demais usuários do site e dos serviços.
          </S.SubContent>
          <S.TitleContent>
            7. POSSIBILIDADE DE CANCELAMENTO DO SERVIÇO PELA VOU DE VAN - UNI
            QUANDO NÃO ATINGIDA A QUANTIDADE MÍNIMA DE PASSAGEIROS:
          </S.TitleContent>
          <S.Content>
            7.1 - Uma vez atingida a quantidade mínima de passageiros, a VOU DE
            VAN - UNI efetuará a contratação dos serviços junto ao motorista
            parceiro. A quantidade mínima de passageiros necessária será
            definida exclusivamente pela VOU DE VAN - UNI em cada caso.
          </S.Content>
          <S.Content>
            7.2 - Quando não for possível atingir a quantidade mínima de pessoas
            para a contratação do serviço junto ao motorista parceiro, a viagem
            não ocorrerá. Neste caso, a VOU DE VAN - UNI comunicará o
            usuário/passageiro em até 48 (quarenta e oito) horas antes da
            realização do trajeto e o valor pago pelo transporte será estornado
            ao usuário também em até 48 (quarenta e oito) horas.
          </S.Content>
          <S.TitleContent>8. PAGAMENTO</S.TitleContent>
          <S.Content>
            8.1 - Para adquirir uma vaga no veículo de transporte, o usuário
            deverá efetuar o pagamento mensal da reserva de vaga no grupo
            através dos meios disponibilizados pela VOU DE VAN - UNI.
          </S.Content>
          <S.Content>
            8.2 - O valor da vaga estará disposto no site e no aplicativo da VOU
            DE VAN - UNI no momento da contratação do serviço.
          </S.Content>
          <S.Content>
            8.3 - Por padrão, toda e qualquer devolução de valores ocorrerá na
            modalidade de crédito em conta junto à VOU DE VAN/ VOU DE VAN - UNI,
            podendo ser utilizado para aquisição de novas vagas em outros
            veículos que irão atender outros trajetos ou eventos que
            eventualmente venham a surgir na plataforma da VOU DE VAN/ VOU DE
            VAN – UNI.
          </S.Content>
          <S.SubContent>
            8.3.1 – Ao exclusivo critério do usuário, poderá solicitar que a
            devolução ocorra na modalidade de estorno bancário, devendo indicar
            uma conta para crédito do respectivo valor.
          </S.SubContent>
          <S.SubContent>
            8.3.2 - Os créditos da VOU DE VAN - UNI (Vou de Van - UNI Cash) são
            unidades de medida utilizadas para contabilizar benefícios
            oferecidos pela VOU DE VAN/ VOU DE VAN - UNI e sua rede autorizada.
            Todo e qualquer crédito disponível para acúmulo e/ou resgate deve
            ter a sua utilização realizada em conformidade com os termos deste
            regulamento.
          </S.SubContent>
          <S.SubSubContent>
            8.3.2.1 - A disponibilidade e utilização dos créditos poderá ser
            restringida parcial ou totalmente à critério da VOU DE VAN/ VOU DE
            VAN - UNI, que se compromete a comunicar o usuário com até 48 horas
            de antecedência através da plataforma e/ou email e/ou SMS e/ou redes
            sociais e/ou qualquer ferramenta de comunicação em massa.
          </S.SubSubContent>
          <S.Content>
            8.4 - No momento do pagamento a VOU DE VAN - UNI atuará, em nome do
            motorista parceiro que realizará o serviço de transporte, como
            facilitadora do pagamento, na qualidade de agente limitado de
            cobrança dele. O pagamento realizado dessa maneira será considerado
            como pagamento feito diretamente pelo usuário ao motorista parceiro
            que efetuará o serviço de transporte.
          </S.Content>
          <S.Content>
            8.5 - O valor final incluirá todos os tributos exigidos por lei.
          </S.Content>
          <S.Content>
            8.6 - Ao portador da conta VOU DE VAN/ VOU DE VAN - UNI e de
            créditos, somente será permitido negociar, vender, trocar ou mesmo
            comprar créditos para si ou como forma de benefício à terceiros se
            esta(s) ação(ões) estiver(em) alinhada(s) com a promoção vigente e
            comunicada pela empresa.
          </S.Content>
          <S.Content>
            8.7 – Ao realizar o pagamento pela aquisição de vaga para realização
            do trajeto, o usuário receberá, no e-mail informado no momento do
            cadastro à VOU DE VAN/ VOU DE VAN - UNI, um ticket contendo o QR
            CODE e demais informações (número da van, local de embarque e
            desembarque, horário e etc.), bem como um link para acesso ao grupo
            criado no aplicativo de mensagens WhatsApp com o motorista parceiro
            e demais passageiros.
          </S.Content>
          <S.SubContent>
            8.7.1 – O usuário que, no momento de cadastro no site da VOU DE VAN/
            VOU DE VAN - UNI, informar e-mail diverso do utilizado, ao efetuar a
            compra da vaga deverá, imediatamente, comunicar tal fato à VOU DE
            VAN – UNI e solicitar a alteração do e-mail para que possa receber o
            ticket em seu e-mail.
          </S.SubContent>
          <S.SubContent>
            8.7.2 – A VOU DE VAN - UNI não se responsabiliza pelo usuário que
            recebeu o e-mail, contudo, ignorou-o e não se manteve atualizado com
            as informações enviadas no grupo criado no aplicativo de mensagens
            WhatsApp para melhor comunicação entre os passageiros e o motorista
            parceiro.
          </S.SubContent>
          <S.TitleContent>9. TAXA DE CANCELAMENTO</S.TitleContent>
          <S.Content>
            9.1 – O Usuário poderá optar por cancelar a aquisição do plano
            mensal ou anual diretamente no site ou no aplicativo da VOU DE VAN –
            UNI.
          </S.Content>
          <S.Content>
            9.2 – O Usuário poderá cancelar o seu plano sem a incidência de
            qualquer multa ou indenização, caso o pedido de cancelamento seja
            feito até 07 (sete) dias após a aquisição, conforme estabelecido no
            artigo 49 do Código de Defesa do Consumidor;
          </S.Content>
          <S.TitleContent>
            10 – DOS ITENS TRANSPORTADOS PELO USUÁRIO
          </S.TitleContent>
          <S.Content>
            10.1 - O usuário é o único integral responsável pelo conteúdo de
            bagagens transportadas durante o trajeto, sendo expressamente vedado
            o transporte de armas de fogo, munições, materiais perigosos,
            explosivos, inflamáveis ou combustíveis; drogas e entorpecentes; e
            quaisquer outros materiais cujo transporte seja proibido pela
            legislação ou atente contra os bons costumes e a moralidade, podendo
            responder o usuário por qualquer infração à legislação em vigor e em
            qualquer âmbito.
          </S.Content>
          <S.Content>
            10.2 – O usuário será exclusivamente responsável pelos seus itens
            pessoais (celular, carteira etc.), não possuindo a VOU DE VAN - UNI
            qualquer responsabilidade sobre tais itens, seja de perda ou danos.
          </S.Content>
          <S.Content>
            10.3 – Em caso de esquecimento de algum item no interior do veículo
            do motorista parceiro, o usuário poderá enviar mensagem no
            respectivo grupo criado no aplicativo de mensagens WhatsApp e tentar
            reaver o mesmo. Caso não logre êxito, a VOU DE VAN - UNI não possui
            qualquer dever de indenizá-lo.
          </S.Content>
          <S.TitleContent>
            11 – DANOS E PREJUÍZOS CAUSADOS AOS MOTORISTAS PARCEIROS
          </S.TitleContent>
          <S.Content>
            11.1 - O usuário será responsável por quaisquer danos ou prejuízos
            que causar ao prestador de serviço de transporte de pessoas e
            concorda em indenizar e manter a VOU DE VAN – UNI indene em relação
            a quaisquer demandas, perdas, prejuízos ou danos direta ou
            indiretamente relacionados a atos ou fatos causados por ele em face
            do prestador de serviço de transporte de pessoas.
          </S.Content>
          <S.TitleContent>12. VAGA PARA TERCEIROS</S.TitleContent>
          <S.Content>
            12.1 – Somente é autorizada a aquisição de vagas para terceiros
            quando este terceiro for menor de idade e/ou o usuário for o
            responsável pelo terceiro.
          </S.Content>
          <S.TitleContent>13. INDENIZAÇÕES</S.TitleContent>
          <S.Content>
            13.1 - O usuário concorda em indenizar e isentar a VOU DE VAN - UNI,
            diretores e empregados, parceiros e clientes que exibam suas marcas,
            por quaisquer perdas e danos que venham a ser demandados, incluindo
            despesas judiciais e honorários advocatícios, em razão: (i) de
            qualquer fato ou ato ilícito praticado por ele; (ii) da violação
            destes Termos; ou (iv) da violação dos direitos de terceiros,
            inclusive dos motoristas parceiros.
          </S.Content>
          <S.Content>
            13.2 – A VOU DE VAN – UNI não possui qualquer responsabilidade em
            possíveis acidentes, sendo o motorista parceiro o único responsável
            neste caso.
          </S.Content>
          <S.TitleContent>
            14. GARANTIA E LIMITAÇÕES DE RESPONSABILIDADE E INDENIZAÇÕES
          </S.TitleContent>
          <S.Content>
            14.1 - O usuário expressamente concorda e está Ciente de que: (i) a
            utilização do serviço será sob inteira responsabilidade dele. O
            serviço é fornecido ao usuário na forma em que está disponível. A
            VOU DE VAN – UNI não oferece outras garantias além das expressamente
            estabelecidas nestes termos; e (ii) a VOU DE VAN - UNI não pode
            garantir que:
          </S.Content>
          <S.SubContent>
            a) o serviço à disposição atenderá às necessidades do usuário;
          </S.SubContent>
          <S.SubContent>
            b) o serviço será prestado de forma ininterrupta, tempestiva;
          </S.SubContent>
          <S.SubContent>
            c) que a qualidade de quaisquer outras ofertas, informações ou outro
            material acessado, obtido, disponibilizado ou prestado ao usuário em
            conexão ao serviço atenderá às expectativas;
          </S.SubContent>
          <S.SubContent>
            d) que melhoramentos ou inovações serão implementadas;e
          </S.SubContent>
          <S.SubContent>
            e) os serviços de transporte solicitados por meio do uso dos
            serviços serão confiáveis, pontuais e adequados.
          </S.SubContent>
          <S.Content>
            14.2 - O usuário concorda expressamente e está ciente de que a VOU
            DE VAN - UNI não terá qualquer responsabilidade, seja contratual ou
            extracontratual, por quaisquer danos patrimoniais ou morais,
            incluindo, sem limitação, danos por lucros cessantes ou de
            informações ou outras perdas intangíveis resultantes do:
          </S.Content>
          <S.SubContent>a) uso ou incapacidade de usar o serviço;</S.SubContent>
          <S.SubContent>
            b) quebras de segurança e acesso não autorizado às transmissões ou
            informações do usuário, bem como da alteração destas;
          </S.SubContent>
          <S.SubContent>
            c) orientações ou condutas de terceiros sobre o serviço; e
          </S.SubContent>
          <S.SubContent>
            d) por motivos de força maior ou caso fortuito, atos praticados pelo
            próprio usuário e atos praticados por ou sob a responsabilidade de
            terceiros.
          </S.SubContent>
          <S.Content>
            14.3 - O usuário está ciente de que os dados do motorista parceiro
            divulgados pela VOU DE VAN - UNI, incluindo, mas não se limitando a
            isto, seu nome completo, modelo e placa do veículo utilizado, foram
            fornecidos pelo próprio motorista parceiro.
          </S.Content>
          <S.Content>
            14.4 – A vaga só será considerada confirmada e, portanto, garantida,
            após a compensação bancária do pagamento realizado pelo usuário à
            VOU DE VAN - UNI. O método de confirmação do pagamento utilizado
            pela VOU DE VAN - UNI é o envio do ticket para o e-mail fornecido
            pelo usuário no momento em que efetuou o cadastro na plataforma.
          </S.Content>
          <S.Content>
            14.5 - A VOU DE VAN - UNI se compromete a trabalhar exclusivamente
            com motoristas parceiros devidamente registrados, fiscalizados e
            autorizados pelos órgãos competentes para realizar transporte
            privado coletivo de passageiros.
          </S.Content>
          <S.Content>
            14.6 - Como não presta serviços de transporte e sequer é parte da
            cadeia de fornecedores da contratação do mesmo, a VOU DE VAN - UNI
            não fornece garantia e nem se responsabiliza por vícios ou fatos do
            serviço, assim entendidos como os atrasos, falhas de equipamento,
            sinistros ou quaisquer outras intercorrências imprevisíveis no
            momento do cadastro de tal motorista no banco de dados da VOU DE VAN
            - UNI.
          </S.Content>
          <S.Content>
            14.7 - A VOU DE VAN - UNI compromete-se a fazer checagens da
            regularidade documental e inspeções periódicas nos veículos dos
            motoristas parceiros constantes em seu banco de dados, da mesma
            forma que os órgãos de fiscalização de transporte e trânsito têm que
            fazer, com o intuito de aumentar a segurança dos usuários do
            SERVIÇO. Todavia, da mesma maneira que ocorre em relação aos órgãos
            de fiscalização de transporte e trânsito, isso não configura endosso
            dos referidos motoristas parceiros, tampouco assunção de
            responsabilidade por parte da VOU DE VAN – UNI.
          </S.Content>
          <S.Content>
            14.8 - Todo e qualquer objeto de uso pessoal é de responsabilidade
            exclusiva de seu usuário. Deve o usuário lembra de levá-lo com ele
            mesmo qualquer objeto de valor, documentos, dinheiro, joias, bem
            como artigos frágeis e eletrônicos. Durante o serviço, a VOU DE VAN
            – UNI não se responsabiliza por qualquer perda ou danos a quaisquer
            pertences.
          </S.Content>
          <S.Content>
            14.9 - A VOU DE VAN - UNI não será responsável por danos indiretos,
            incidentais, especiais, punitivos ou emergentes, inclusive lucros
            cessantes, perda de dados, danos morais ou patrimoniais
            relacionados, associados ou decorrentes de qualquer uso dos
            SERVIÇOS.
          </S.Content>
          <S.Content>
            14.10 - Os SERVIÇOS da VOU DE VAN - UNI poderão ser usados pelo
            usuário para facilitar a contratação de serviços de transporte
            escolar/universitário. Contudo, o usuário concorda que a VOU DE VAN
            - UNI não possui responsabilidade em relação a ele, por conta de
            qualquer serviço de transporte realizados pelos motoristas
            parceiros, salvo se expressamente estabelecida nestes TERMOS DE USO,
            incluindo, mas não se limitando a, rotas adotadas pelos motoristas
            ou por quaisquer itens perdidos nos veículos.
          </S.Content>
          <S.Content>
            14.11 – O usuário reconhece e concorda que os motoristas parceiros
            são autônomos e responsáveis exclusivos pela prestação dos serviços
            de transporte.
          </S.Content>
          <S.TitleContent>15. ACESSO À REDE E EQUIPAMENTOS</S.TitleContent>
          <S.Content>
            15.1 – O usuário é o único responsável por obter o acesso a rede de
            dados necessária para usar os SERVIÇOS e será o único responsável
            por arcar com todas as taxas e encargos necessários para tanto.
          </S.Content>
          <S.Content>
            15.2 – O usuário é responsável por adquirir e atualizar os
            equipamentos e dispositivos necessários para acessar e usar os
            SERVIÇOS e quaisquer de suas atualizações.
          </S.Content>
          <S.Content>
            15.3 - A VOU DE VAN - UNI não garante que os SERVIÇOS, ou qualquer
            parte deles, funcionarão em qualquer equipamento ou dispositivo em
            particular. Além disso, os SERVIÇOS poderão estar sujeitos a mau
            funcionamento e atrasos inerentes ao uso da internet e de
            comunicações eletrônicas.
          </S.Content>
          <S.TitleContent>16. DISPOSIÇÕES GERAIS</S.TitleContent>
          <S.Content>
            16.1 - Ao acessar e usar os SERVIÇOS o usuário concorda com os
            presentes TERMOS DE USO, que estabelecem o relacionamento contratual
            entre ele e a VOU DE VAN - UNI. Se o usuário não concorda com estes
            TERMOS DE USO, não poderá acessar nem usar os SERVIÇOS.
          </S.Content>
          <S.Content>
            16.2 - Os presentes TERMOS DE USO encerram, substituem e superam
            todos os acordos, termos e acertos anteriores entre o usuário e a
            VOU DE VAN, prevalecendo sobre quaisquer outros ajustes anteriores.
          </S.Content>
          <S.Content>
            16.3 - Termos adicionais poderão se aplicar a determinados SERVIÇOS,
            tais como condições para um evento, atividade ou promoção em
            particular, e esses termos adicionais serão divulgados em relação
            aos respectivos SERVIÇOS.
          </S.Content>
          <S.Content>
            16.4 - Termos adicionais são complementares e considerados parte
            integrante destes TERMOS DE USO para os efeitos dos respectivos
            SERVIÇOS e prevalecerão sobre estes TERMOS DE USO em caso de
            conflito com relação às matérias específicas das quais eles venham a
            tratar.
          </S.Content>
          <S.Content>
            16.5 - A VOU DE VAN - UNI poderá encerrar os SERVIÇOS a qualquer
            tempo, total ou parcialmente, ou mesmo apenas em relação a um
            usuário, ou, de modo geral, deixar de oferecer ou negar acesso aos
            SERVIÇOS ou a qualquer parte deles, a qualquer momento e por
            qualquer motivo, independente de prévio aviso ou notificação, sem
            que disso resulte qualquer direito ou obrigatoriedade de pagamento
            de indenizações.
          </S.Content>
          <S.Content>
            16.6 - A VOU DE VAN - UNI poderá alterar os TERMOS DE USO relativos
            aos SERVIÇOS a qualquer momento e os aditamentos entrarão em vigor
            quando a VOU DE VAN - UNI fizer a postagem dos mesmos neste local.
          </S.Content>
          <S.Content>
            16.7 - A continuidade do uso dos SERVIÇOS após o aditamento dos
            TERMOS DE USO representa seu consentimento em vincular-se às novas
            regras e condições.
          </S.Content>
          <S.Content>
            16.8 - Quaisquer controvérsias decorrentes da aplicação dos
            presentes TERMOS DE USO serão dirimidas conforme as leis
            brasileiras, no foro da Comarca de Vila Velha/ES.
          </S.Content>
          <S.AttContent>Atualizado em 06/11/2023.</S.AttContent>
        </S.ContentContainer>
      </S.Body>

      <S.Footer>
        <NextButton isLoading={isLoading || isCreating} onPress={onSubmit}>
          Li e concordo com os termos
        </NextButton>
      </S.Footer>
    </S.Container>
  );
}

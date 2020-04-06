import React ,{useContext} from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation , useRoute } from '@react-navigation/native';
import { Image , Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { ThemeContext } from 'styled-components'


import {
  Container,
  Header,
  ButtonTouchable,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionTouchable,
  ActionText,} from './styles';

  import dark from '../../assets/logodark.png'
  import light from '../../assets/logo.png'

export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}`;       

  function navigateBack(){
      navigation.goBack()
    }     

  function sendMail(){
    MailComposer.composeAsync({
        subject:`Heroi do caso: ${incident.title}`,
        recipients:[incident.email],
        body:message,
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

 

  const { title } = useContext(ThemeContext)
  const logo = title === 'dark' ? dark : light
  

  return(
    <Container>
      <Header>
      <Image source={logo} />

          <ButtonTouchable onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#E02041" />
          </ButtonTouchable>
      </Header>

      <Incident>
      <IncidentProperty>ONG:</IncidentProperty>
          <IncidentValue> {incident.name} de {incident.city}/{incident.uf}  </IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue> {incident.title} </IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentValue> {
          Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BRL'
            }).format(incident.value)} 
          </IncidentValue>
      </Incident>


      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o heroi desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

      <Actions>
        <ActionTouchable  onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
         </ActionTouchable>

         <ActionTouchable  onPress={sendMail}>
            <ActionText>E-mail</ActionText>
         </ActionTouchable>
      </Actions>
    </ContactBox>
  </Container>
 );
}


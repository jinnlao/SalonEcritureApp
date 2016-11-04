
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Tabs, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux'


export default class ProgrammeSalon extends Component {
  render() {
    return (

      <Container>
        <Header>
         
          <Title>Programme du Salon</Title>

        </Header>

        <Content>
          <Text>Ici vous trouverez le programme du salon</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent onPress={Actions.actualites}>
              <Icon name='ios-cafe-outline' />
              Actualités
            </Button>
          </FooterTab>
          <FooterTab>
            <Button  disabled transparent onPress={Actions.programmeSalon}>
              <Icon name='ios-list-box' />
              Programme salon
            </Button>
          </FooterTab>
          <FooterTab>
            <Button transparent onPress={Actions.informationsPratiques}>
              <Icon name='ios-information-circle-outline' />
              <Text style={{textAlign:'center'}}>Informations</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
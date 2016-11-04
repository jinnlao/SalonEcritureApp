/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container, Header, Tabs, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Scene, Router } from 'react-native-router-flux';


import Actualites from './app/scenes/Actualites';
import ProgrammeSalon from './app/scenes/ProgrammeSalon';
import InformationsPratiques from './app/scenes/InformationsPratiques';
import ActualitesDetails from './app/scenes/ActualitesDetails';

class SalonEcritureApp extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" tabs={true}>
                    <Scene key="actualites" hideNavBar={true}>
                        <Scene key="actualitesList" component={Actualites} title="Actualites" hideNavBar={true}/>
                        <Scene key="actualitesDetails" component={ActualitesDetails} title="Actualites" hideNavBar={true}/>
                    </Scene>
                    <Scene key="programmeSalon" component={ProgrammeSalon} title="ProgrammeSalon" hideNavBar={true}/>
                    <Scene key="informationsPratiques" component={InformationsPratiques} title="InformationsPratiques" hideNavBar={true}/>
                </Scene>
            </Router>
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

AppRegistry.registerComponent('SalonEcritureApp', () => SalonEcritureApp);

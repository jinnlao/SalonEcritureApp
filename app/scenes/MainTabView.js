'use strict';

import React, { Component, PropTypes } from 'react';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

// Local components
import NewsMainView from './news/NewsMainView';
import InfoMainScene from './information/InfoMainScene';
import MainTabBar from '../components/MainTabBar';
import ProgramMainScene from './program/ProgramMainScene';

import GLOBAL from '../global/GlobalVariables';


const propTypes = {
    //Backend data
    articlesInfosContent: PropTypes.arrayOf(PropTypes.object),
    articlesHtmlContent: PropTypes.arrayOf(PropTypes.string),
    infosPratiquesContent: PropTypes.object,
    programmeContent: PropTypes.object,

    //Required
    fetchBackendToUpdateAll: PropTypes.func.isRequired,
    currentlyFetchingContent: PropTypes.bool.isRequired,
    goToNewsDetailedView: PropTypes.func.isRequired,
    goToProgramDetailedView: PropTypes.func.isRequired,
};


/**
 * This component consists of the tab view. It renders the tab bar, and each
 * view in it: NewsMainView, ProgramMainScene and InfoMainScene.
 */
class MainTabView extends Component {
    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <MainTabBar />}
                tabBarBackgroundColor={GLOBAL.THEME_COLOR}
                tabBarPosition='bottom'
            >

                <NewsMainView
                    tabLabel="NewsMainView"
                    articlesContent={this.props.articlesHtmlContent}
                    articlesInfo={this.props.articlesInfosContent}
                    fetchBackendToUpdateAll={this.props.fetchBackendToUpdateAll}
                    goToNewsDetailedView={
                        (article_info, article_html) =>
                            this.props.goToNewsDetailedView(article_info, article_html)
                    }
                    loading={this.props.currentlyFetchingContent}
                />

                <ProgramMainScene
                    tabLabel="ProgramMainScene"
                    goToProgramDetailedView={
                        (programmeElement) => this.props.goToProgramDetailedView(programmeElement)
                    }
                    programmeContent={this.props.programmeContent}
                />

                <InfoMainScene
                    tabLabel="InfoMainScene"
                    currentlyFetchingContent={this.props.currentlyFetchingContent}
                    textFieldsContent={this.props.infosPratiquesContent}
                />

            </ScrollableTabView>
        );
    }
}


MainTabView.propTypes = propTypes;

export default MainTabView;

import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator , createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Decks from './DecksViewItems';
import { Ionicons } from '@expo/vector-icons';
import DeckViewPage from './DeckViewPage'
import AddCard from './AddCard'
import QuizPage from './QuizPage'
import AddDeck from './AddDeck'
import Card from './Card'
import { main_color , white } from '../utils/color'


const router = {
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) =>
            Platform.OS === 'ios' && <Ionicons name="ios-bookmarks" size={30} color={main_color} />,
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add deck',
            tabBarIcon: ({ tintColor }) =>
            Platform.OS === 'ios' && <Ionicons name="ios-bookmarks" size={30} color={main_color} />,
        },
    },    
};


const navigationOptions = {
    tabBarOptions: {
        showIcon: true,
        activeTintColor: main_color,
        style: {
            padding: 10,
            height: Platform.OS === 'ios' ? 60 : 'auto',
            fontSize: 18,
            backgroundColor:  white ,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowRadius: 6,
            shadowOpacity: 1,
        },
    },
};

const TabNav =
Platform.OS === 'ios'
? createBottomTabNavigator(router, navigationOptions)
: createMaterialTopTabNavigator(router, navigationOptions);

const AppNav = createStackNavigator({
    Home: {
        screen: TabNav,
        navigationOptions: () => ({
            title: `Deck`,
            headerBackTitle: 'Back',
            headerTintColor:white,
            headerTitleContainerStyle: 'right',
            headerStyle: {
                height: Platform.OS === 'ios' ? 50 : 'auto',
                fontSize: 18,
                backgroundColor:  main_color ,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
            },         
        }),
        
    },
    DeckViewPage: {
        screen: DeckViewPage,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('deck'),
            headerBackTitle: 'Back',
            headerTintColor:white,
            headerTitleContainerStyle: 'right',
            headerStyle: {
                height: Platform.OS === 'ios' ? 50 : 'auto',
                fontSize: 18,
                backgroundColor:  main_color ,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
            },         
        }),
    
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: () => ({
            title: `Add Card`,
            headerBackTitle: 'Back',
            headerTintColor:white,
            headerTitleContainerStyle: 'right',
            headerStyle: {
                height: Platform.OS === 'ios' ? 50 : 'auto',
                fontSize: 18,
                backgroundColor:  main_color ,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
            },         
        }),
    
    },
    QuizPage: {
        screen: QuizPage,
        navigationOptions: () => ({
            title: `Quiz`,
            headerBackTitle: 'Back',
            headerTintColor:white,
            headerTitleContainerStyle: 'right',
            headerStyle: {
                height: Platform.OS === 'ios' ? 50 : 'auto',
                fontSize: 18,
                backgroundColor:  main_color ,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
            },         
        }),
    
    },

    Card: {
        screen: Card,
        navigationOptions: () => ({
            title: `Deck`,
            headerBackTitle: 'Back',
            headerTintColor:white,
            headerTitleContainerStyle: 'right',
            headerStyle: {
                height: Platform.OS === 'ios' ? 50 : 'auto',
                fontSize: 18,
                backgroundColor:  main_color ,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
            },         
        }),
        
    },        
});

export default createAppContainer(AppNav);
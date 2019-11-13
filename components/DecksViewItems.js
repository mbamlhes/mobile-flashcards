import React , {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View , FlatList } from 'react-native';
import {  connect } from 'react-redux';
import Constants from 'expo-constants';
import { handleInitialData } from '../actions/shared';
import DeckViewItem from './DeckViewItem'
import { white , main_color} from '../utils/color'

class decks extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    navigateToDeck = (deck) => {
        this.props.navigation.navigate('DeckViewPage', { deck });
    }    
    render () {
        const { decks } = this.props
        return (
            <SafeAreaView style={styles.container}>
            <FlatList
            style={styles.deckList}
            keyExtractor={(item, index) => index.toString()}
            data={Object.values(decks)}
            renderItem={({ item }) => (
                <DeckViewItem
                key={(item,index)=>index.toString()}
                decks={item}
                navigateToDeck={this.navigateToDeck} 
                />
                )}
                />
                </SafeAreaView>
                )
            }
        }
        
        
        const styles = StyleSheet.create({
            deckList: {
                flex: 1,
                alignSelf: 'stretch',
                marginTop: 5,
                padding: 10
            },                
            container: {
                flex: 1,
                backgroundColor: white,
                alignItems: 'center',
                justifyContent: 'center',
            },
            item: {
                backgroundColor: main_color,
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                flex : 1
            },
            title: {
                fontSize: 32,
            },
        });
        
        
        function mapStateToProps(state) {
            return {
                decks: state ? state : ''  ,
            };
        }
        
        export default connect(mapStateToProps)(decks)
        
        
import React , {Component} from 'react';
import {  StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import {  connect } from 'react-redux';
import { main_color , white } from '../utils/color'

class deck extends Component {
    
 
    render() {
        const { decks , navigateToDeck } = this.props
        const { questions } = this.props.decks;
        return (
            <TouchableOpacity
            onPress={() => navigateToDeck(decks.title)}
            >
            <View style={styles.deckItem}>
            <Text style={styles.deckTitle}>{decks.title}</Text>
            <Text style={styles.cardNumber}>Cards: {questions ? questions.length : 0}</Text>
            </View>
            </TouchableOpacity>
     
            );
        }
        
        
    }
    
    const styles = StyleSheet.create({
        deckItem: {
          backgroundColor: main_color,
          marginBottom: 10,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          shadowRadius: 6,
          elevation: 3
        },
        deckTitle: {
          marginBottom: 5,
          fontSize: 18,
          color: white,
        },
        cardNumber: {
          color: white,
          fontSize: 15
        }
      });
      
    export default deck
import React , {Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white , main_color } from '../utils/color'

class DeckViewPage extends Component {
    navigate = (screen) => {
        this.props.navigation.navigate(screen, {
            deck: this.props.deck.title
        })
    }
    
    render() {
        const { deck } = this.props
        return (
            <View style={styles.deckCard}>
            <View>
            <Text style={styles.headerTitle}>{deck.title}</Text>
            <Text style={styles.cardNumber}>This deck has {deck.questions.length} cards</Text>
            </View>
            <View>
            <TouchableOpacity 
            style={styles.submitButton}
            onPress={() => this.navigate('AddCard')}>
            <Text style={styles.submitButtonText}>Add Card</Text>
            </TouchableOpacity>         
            <TouchableOpacity 
            style={styles.submitButton}
            onPress={() => this.navigate('QuizPage')}>
            <Text style={styles.submitButtonText}>Start Quiz</Text>
            </TouchableOpacity>                     
            
            </View>
            </View>
            );
        }
        
        
    }
    
    
    const styles = StyleSheet.create({
        deckCard: {
            flex: 1,
            alignSelf: 'stretch',
            marginTop: 5,
            justifyContent:'space-around',
            margin: 25,
            padding: 25,
        },
        headerTitle: {
            fontSize: 23,
            marginBottom: 5,
            fontWeight: 'bold',
            textAlign: 'center',
            color: main_color,             
        },
        cardNumber: {
            fontSize: 15,
            textAlign: 'center'
        },
        submitButton: {
            backgroundColor: main_color,
            padding: 10,
            margin: 15,
            height: 40,
        },
        submitButtonText:{
            color: white,
            textAlign:'center'
        },    
    });
    
    function mapStateToProps(state, props) {
        return { deck: state[props.navigation.state.params.deck] };
    }
    
    export default connect(mapStateToProps)(DeckViewPage);
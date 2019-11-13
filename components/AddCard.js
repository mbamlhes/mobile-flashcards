import React , {Component} from 'react';
import { SafeAreaView,
    StyleSheet,
    Text, 
    View ,
    FlatList , 
    TouchableOpacity , 
    KeyboardAvoidingView ,
    TextInput} from 'react-native';
    import { connect } from 'react-redux';
    import Constants from 'expo-constants';
    import { handleAddCards } from '../actions/decks';
    import { white , main_color } from '../utils/color'
    
    class AddCard extends Component {
        state = { 
            question: 'Question',
            answer: 'Answer',
        };
        

        createCard = () => {
            const { deck } = this.props
            if(this.state.question.length > 5 && this.state.answer.length > 2) {
              const NewCard = {
                question: this.state.question,
                answer: this.state.answer
              }
              this.props.dispatch(handleAddCards(deck.title, NewCard))
              this.setState({ 
                question: '',
                answer: ''
              });
              this.props.navigation.navigate('DeckViewPage', { deck: deck.title });
            }
          }
        
        render() {
            const { deck } = this.props
            return (
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <TextInput
                style={styles.input}
                onChangeText={question => this.setState({ question })}
                value={this.state.question}
                onFocus={() => this.setState({ question: ''})}
                />
                <TextInput
                style={styles.input}
                onChangeText={answer => this.setState({ answer })}
                value={this.state.answer}
                onFocus={() => this.setState({ answer: ''})}
                />
                <TouchableOpacity 
                style={styles.submitButton}
                onPress={this.createCard}>
                <Text style={styles.submitButtonText}>Create Card</Text>
                </TouchableOpacity>                           
                </KeyboardAvoidingView>
                )
            }
        }
        
        
        const styles = StyleSheet.create({                
            container: {
                flex: 1,
                backgroundColor: white,
                marginTop: Constants.statusBarHeight,
            },
            input: {
                margin: 15,
                height: 40,
                padding:5,
                borderColor: main_color,
                borderWidth: 1
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
            }   ,         
            title: {
                fontSize: 32,
            },
        });

        function mapStateToProps(state, props) {
            return { deck: state[props.navigation.state.params.deck] };
        }
        
        export default connect(mapStateToProps)(AddCard);
        
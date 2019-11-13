import React , {Component} from 'react';
import { StyleSheet,
    Text, 
    View ,
    TouchableOpacity , 
    KeyboardAvoidingView ,
    TextInput} from 'react-native';
    import { connect } from 'react-redux';
    import Constants from 'expo-constants';
    import { handleAddDecks } from '../actions/decks';
    import { white , main_color} from '../utils/color'
    
    class AddDeck extends Component {
        state = { 
            title: 'Title here ...',
        };
        
        
        createDeck = () => {
            const { title } = this.state
            if(title.length > 5) {
                this.props.dispatch(handleAddDecks(title))
                console.log('navigation Title :',title)
                this.props.navigation.navigate('DeckViewPage', { deck : title });                
                this.setState({ 
                    title: '',
                });
                
            } else{
                alert('must more letter')
            }
        }
        
        render() {
            return (
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <TextInput
                style={styles.input}
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                onFocus={() => this.setState({ title : ''})}
                />
                
                <TouchableOpacity 
                style={styles.submitButton}
                onPress={this.createDeck}>
                <Text style={styles.submitButtonText}>Create Deck</Text>
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
            },         
            title: {
                fontSize: 32,
            },
        });
        
        
        export default connect()(AddDeck);
        
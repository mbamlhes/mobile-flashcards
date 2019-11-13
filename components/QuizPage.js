import React , {Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setLocalNotification , clearLocalNotification } from '../utils/helper'
import { main_color , white } from '../utils/color'
import CardFlip from 'react-native-card-flip';
import Card from './Card';

class QuizPage extends Component {
    state = {
        correctAnswer : 0,
        finishQuiz : false,
        indexOfQuestion : 0,
    }
    
    getIndex (question) {
        const { deck } = this.props
        return deck.findIndex(obj => obj.question === question);
    }
    
    handleCorrect = () => {
        
        const {correctAnswer , indexOfQuestion } = this.state
        const { deck } = this.props
        const Questions = deck['questions'];   
        if(indexOfQuestion < Questions.length){  
            this.setState({ correctAnswer: correctAnswer + 1 , indexOfQuestion:indexOfQuestion +1 })
        } 
        this.showResult()
        
    }
    
    handleIncorrect = () => {
        const { indexOfQuestion } = this.state
        const { deck } = this.props
        const Questions = deck['questions'];        
        if(indexOfQuestion < Questions.length){
            this.setState({ indexOfQuestion : indexOfQuestion + 1 })
        } 
        this.showResult()
    }
    
    showResult = () => {
        const { indexOfQuestion , finishQuiz } = this.state
        const { deck } = this.props
        const Questions = deck['questions'];           
        if(indexOfQuestion + 1 == Questions.length){
            this.setState({ finishQuiz : !finishQuiz })

             clearLocalNotification()
            .then(setLocalNotification)
        }
    }

    backToDeck = (screen) => {
        const { deck } = this.props        
        this.props.navigation.navigate(screen, {
            deck: deck.title
        })
    }    
    
    restartQuiz = () => {
        this.setState({ correctAnswer: 0 , indexOfQuestion:0,finishQuiz:false })
    }

    render() {
        const { deck } = this.props
        const Questions = deck['questions'];
        const { indexOfQuestion , finishQuiz , correctAnswer } = this.state;
        
        if(Questions.length == 0){
            return (
                <View style={styles.container_center}>
                <Text>No cards added to this deck 😕</Text>
                </View>
                )
            }
            
            if(finishQuiz == true){
                return (
                    <View style={styles.container_center}>
                    <Text style={styles.pd_all}>your score is { correctAnswer} / {Questions.length} ✋</Text>
                    <TouchableOpacity 
                    onPress={() => this.restartQuiz()}
                    style={styles.submitButtonCorrect}>
                    <Text style={[styles.submitButtonText,styles.flex_button]}> Restart Quiz </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.backToDeck('DeckViewPage')}
                    style={[styles.submitButtonCorrect,styles.flex_button]}>
                    <Text style={styles.submitButtonText}> Back to Deck </Text>
                    </TouchableOpacity>                    
                    </View>
                    )
                }
                
                const currentQuestion = Questions[indexOfQuestion];
                
                
                return (
                    
                    <View style={styles.container}>
                    <Card 
                    question={currentQuestion['question']} 
                    answer={currentQuestion['answer']}
                    index={indexOfQuestion + 1}
                    length={Questions.length}
                    handleCorrect = {this.handleCorrect}
                    handleIncorrect = {this.handleIncorrect}
                    
                    />
                    </View>
                    
                    
                    )
                }
            }
            
            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    justifyContent:'space-between',
                },
                container_center : {
                    flex : 1,
                    justifyContent: 'center',
                    alignItems:'center'
                },
                pd_all:{
                    paddingTop:20,
                    paddingBottom:20
                },
                center:{
                    alignSelf: 'center',
                    marginBottom:20
                },
                flexFull:{
                    flex:1,
                    width: 320,
                    alignSelf: 'center',
                },
                flex_button : {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                cardContainer: {
                    width: 320,
                    height: 370,
                },
                card: {
                    width: 320,
                    height: 370,
                    backgroundColor: '#FE474C',
                    borderRadius: 5,
                    shadowColor: 'rgba(0,0,0,0.5)',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.5,
                },
                card1: {
                    backgroundColor: main_color,
                },
                card2: {
                    backgroundColor: '#FEB12C',
                },
                
                submitButtonCorrect: {
                    backgroundColor: 'green',
                    padding: 10,
                    margin: 15,
                    height: 40,
                    borderRadius: 5,
                },
                
                submitButtonIncorrect: {
                    backgroundColor: 'red',
                    padding: 10,
                    margin: 15,
                    height: 40,
                    borderRadius: 5,
                },        
                submitButtonText:{
                    color: 'white'
                }, 
                label: {
                    lineHeight: 470,
                    textAlign: 'center',
                    fontSize: 55,
                    fontFamily: 'System',
                    color: '#ffffff',
                    backgroundColor: 'transparent',
                },
            });
            
            
            function mapStateToProps(state, ownProps) {
                return { deck: state[ownProps.navigation.state.params.deck] };
            }
            
            export default connect(mapStateToProps)(QuizPage);
            
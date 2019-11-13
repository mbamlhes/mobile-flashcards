import React , {Component} from 'react';
import { StyleSheet, Text, View  , TouchableOpacity  } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { main_color , white } from '../utils/color';

class Card extends Component {
    
    render() {
        const { question ,
            answer,
            index,
            length,
            handleCorrect,
            handleIncorrect  } = this.props
            return (
                
                <View style={styles.container}>
                <Text style={[styles.center , styles.bold]}>  {index} of {length} cards</Text>
                <CardFlip style={styles.flexFull} ref={(card) => this.card = card} >
                <TouchableOpacity 
                style={[styles.card,styles.card1]} 
                onPress={() => this.card.flip()} >
                <Text style={styles.cardOneText}>{question}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card,styles.card2]} onPress={() => this.card.flip()} >
                <Text style={styles.cardTowText}>{answer}</Text>
                </TouchableOpacity>
                </CardFlip>
                <View style={[styles.flexFull ,{ marginTop : 150} ] }>
                <Text style={styles.info}>💡show answer click on question box !</Text>
                <TouchableOpacity onPress = {handleCorrect} style={styles.submitButtonCorrect}><Text style={styles.submitButtonText}>Correct</Text></TouchableOpacity>
                <TouchableOpacity onPress = {handleIncorrect} style={styles.submitButtonIncorrect}><Text style={styles.submitButtonText}>Incorrect</Text></TouchableOpacity>
                </View>
                </View>
                
                )
            }
        }
        
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent:'space-between',
            },
            bold : {
                fontWeight : 'bold'
            },
            center:{
                textAlign:'center',
                marginBottom:20,
                marginTop:20
            },
            flexFull:{
                flex:1,
                width: 320,
                alignSelf: 'center',
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
                color:white
            },
            card2: {
                backgroundColor: '#FEB12C',
            },
            cardOneText : {
                fontSize:20,
                textAlign:'center',
                paddingTop:20,
                color:white
            },
            cardTowText : {
                fontSize:20,
                textAlign:'center',
                paddingTop:20,
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
            info:{
                color : 'black',
                textAlign:'center',
                marginBottom:20,
            }
        });
        
        
        export default Card
        
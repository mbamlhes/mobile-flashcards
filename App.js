import React , {Component} from 'react';
import { StyleSheet, Text, View , StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider , connect } from 'react-redux';
import Constants from 'expo-constants';
import { handleInitialData } from './actions/shared';
import reducer from './reducers';
import Decks from './components/DecksViewItems'
import TabNav from './components/TabNav'
import {secondry_color} from './utils/color'
import { setLocalNotification } from './utils/helper'

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

function FlashCard ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
    )
  }

class App extends Component {
  componentDidMount() {
    setLocalNotification()
}
  render () {
    return (
      <Provider store={store}>
      <FlashCard backgroundColor={secondry_color} barStyle="light-content" />
      <View style={styles.container}>
      <TabNav />
      </View>
      </Provider>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  
  
  
  export default App
  
  
import { AsyncStorage } from 'react-native';
const STORAGE_KEY = 'FlashCards:decks';

const startingData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'Is React a Javascript UI library?',
        answer: 'Correct'
      },
      {
        question: 'Correct place to make Ajax requests is in a render method?',
        answer: 'Incorrect'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }, 
      { 
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      }
    ]
  }
}

export function getInitialData() {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    if(result !== null) {
      return JSON.parse(result) 
    } else {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(startingData));
      return startingData;
    }
  });
}

export function getDeckByTitle(title) {
  return getInitialData()
    .then((decks) => decks[title]);
}

export function saveDeckTitle(title) {
  const deckObj = { title, questions: [] };
  AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: deckObj
  }));
  return getInitialData() 
}

export function saveCardToDeck(title, card) {
  return getInitialData()
    .then((decks) => {
      decks[title].questions.push(card);
      AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks));
    });
}

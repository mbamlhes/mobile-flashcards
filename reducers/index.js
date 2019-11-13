import { GET_DECKS, ADD_DECKS, ADD_CARD } from '../actions/decks'


export default function reducer(state = {}, action) {
    switch(action.type) {
      case GET_DECKS:
        return action.decks;
      case ADD_DECKS:
        return {
          ...state,
          [action.decks] : {
            questions : [],
            title : action.decks
          }
        }
      case ADD_CARD:
        const newDeck = state[action.deck];
        newDeck.questions.push(action.cards);
        return {
          ...state,
          [action.deck]: newDeck
        };
      default:
        return state;
    }
  }

  

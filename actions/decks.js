import { saveDeckTitle , saveCardToDeck } from '../utils/api';
export const GET_DECKS = 'GET_DECKS'
export const ADD_DECKS = 'ADD_DECKS'
export const ADD_CARD = 'ADD_CARD'


export function get_decks(decks) {
    return {
        type: GET_DECKS,
        decks,
    };
}

export function add_decks(decks) {
    return {
        type: ADD_DECKS,
        decks,
    };
}

export function add_cards(deck,cards) {
    return {
        type: ADD_CARD,
        deck,
        cards
    };
}

export function handleAddDecks(decks) {
    return (dispatch) => {
        dispatch(add_decks(decks))
        return saveDeckTitle(decks)
      }    
}

export function handleAddCards (deck,cards) {
    return (dispatch) => {
        dispatch(add_cards(deck,cards))
        return saveCardToDeck(deck,cards)
    }
}



import { getInitialData } from '../utils/api';
import { get_decks } from './decks';

export function handleInitialData() {
    return (dispatch) => {
      getInitialData()
        .then((decks) => {
            dispatch(get_decks(decks))
        })
    }
  }

  
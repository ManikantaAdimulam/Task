import {ADD_NEW_ENTRY, EDIT_ENTRY} from '../Actions/Actions';

const initialState = {
  data: [
    {
      title: 'NOTRING NEW YEAR OFFER',
      quantity: '54 CREDITS',
      originalValue: 'RS. 999/-',
      offerValue: 'RS. 499/-',
      ratio: '910X500',
    },
    {
      title: 'NOTRING NEW YEAR OFFER',
      quantity: '54 CREDITS',
      originalValue: 'RS. 999/-',
      offerValue: 'RS. 499/-',
      ratio: '910X500',
    },
  ],
};

export function listReducer(state = initialState, action) {
  return state;
}

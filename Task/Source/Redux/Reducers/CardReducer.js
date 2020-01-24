import {CHANGE_STATUS} from '../Actions/Actions';

const intitalState = {
  isActive: false,
  message: 'Calls and messages are being forwarded to 7032312889.',
  number: '917799734813',
};
export function cardReducer(state = intitalState, action) {
  console.log(`payload${action.payload}`);
  if (action.type == CHANGE_STATUS) {
    if (action.payload) {
      return {
        ...state,
        message: 'Calls and messages are being managed by NoTring.',
        isActive: action.payload,
      };
    } else {
      return {
        ...state,
        message: 'Calls and messages are being forwarded to 7032312889.',
        isActive: action.payload,
      };
    }
  } else {
    return state;
  }
}

import { RECIEVE_USER_INFO } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  pass: '',
};

const userRDC = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECIEVE_USER_INFO:
    return {
      ...state,
      email: action.email,
      pass: action.password,
    };
  default:
    return state;
  }
};

export default userRDC;

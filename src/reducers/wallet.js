import { RECIEVE_API_QUOTATION, REQUEST_API } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletRDC = (state = INITIAL_STATE, action) => {
  // const keys = Object.keys(quotation);
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case RECIEVE_API_QUOTATION:
    return {
      ...state,
      currencies: action.curr,
    };
  default:
    return state;
  }
};

export default walletRDC;

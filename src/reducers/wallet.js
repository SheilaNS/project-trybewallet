import { DELETE_TASK, RECIEVE_API_QUOTATION, RECIEVE_API_RATE,
  RECIEVE_WALLET_INFO, REQUEST_API } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletRDC = (state = INITIAL_STATE, action) => {
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
  case RECIEVE_API_RATE:
    return {
      ...state,
      rates: action.rates,
    };
  case RECIEVE_WALLET_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.wallet],
    };
  case DELETE_TASK:
    return {
      ...state,
      expenses: state.expenses.filter((expe) => expe.id !== action.task),
    };
  default:
    return state;
  }
};

export default walletRDC;

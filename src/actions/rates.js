import { RECIEVE_API_RATE, REQUEST_API } from '.';
import quotationAPI from '../service/quotationAPI';

const requestAPI = () => ({ type: REQUEST_API });

const recieveWalletRate = (rates) => ({
  type: RECIEVE_API_RATE,
  rates,
});

const fetchQuotationToWallet = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const data = await quotationAPI();
    return dispatch(recieveWalletRate(data));
  } catch (error) {
    console.log(error);
  }
};

export default fetchQuotationToWallet;

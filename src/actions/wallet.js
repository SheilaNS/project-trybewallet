import { RECIEVE_API_QUOTATION, REQUEST_API } from '.';
import quotationAPI from '../service/quotationAPI';

const requestAPICurr = () => ({ type: REQUEST_API });

const recieveAPICurr = (codes) => {
  const keys = Object.keys(codes).filter((elem) => elem !== 'USDT');
  return ({
    type: RECIEVE_API_QUOTATION,
    curr: keys,
  });
};

const fecthQuotationAPI = () => async (dispatch) => {
  try {
    dispatch(requestAPICurr());
    const data = await quotationAPI();
    return dispatch(recieveAPICurr(data));
  } catch (error) {
    console.log(error);
  }
};

export default fecthQuotationAPI;

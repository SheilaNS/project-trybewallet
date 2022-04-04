// Coloque aqui suas actions
// API
export const REQUEST_API = 'REQUEST_API';
export const RECIEVE_API_QUOTATION = 'RECIEVE_API_QUOTATION';
export const RECIEVE_API_RATE = 'RECIEVE_API_RATE';
export const RECIEVE_API_FAILURE = 'RECIEVE_API_FAILURE';
export const CHANGE_TOTAL = 'CHANGE_TOTAL';

// user
export const RECIEVE_USER_INFO = 'RECIEVE_USER_INFO';

// wallet
export const RECIEVE_WALLET_INFO = 'RECIEVE_WALLET_INFO';

export const recieveWalletInfo = (wallet) => ({
  type: RECIEVE_WALLET_INFO,
  wallet,
});

// export const getTotalExpenses = (total) => ({
//   type: CHANGE_TOTAL,
//   total,
// });

// Coloque aqui suas actions
// API
export const REQUEST_API = 'REQUEST_API';
export const RECIEVE_API_QUOTATION = 'RECIEVE_API_QUOTATION';
export const RECIEVE_API_RATE = 'RECIEVE_API_RATE';
export const RECIEVE_API_FAILURE = 'RECIEVE_API_FAILURE';

// user
export const RECIEVE_USER_INFO = 'RECIEVE_USER_INFO';

// wallet
export const RECIEVE_WALLET_INFO = 'RECIEVE_WALLET_INFO';

export const recieveWalletInfo = (wallet) => ({
  type: RECIEVE_WALLET_INFO,
  wallet,
});

// tasks
export const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  task: Number(id),
});

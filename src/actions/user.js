import { RECIEVE_USER_INFO } from '.';

const recieveUserInfo = ({ email, password }) => ({
  type: RECIEVE_USER_INFO,
  email,
  password,
});

export default recieveUserInfo;

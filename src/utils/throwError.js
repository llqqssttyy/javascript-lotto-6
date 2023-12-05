import { MESSAGES } from '../constants/messages.js';

const throwError = (errMsg) => {
  throw new Error(`${MESSAGES.ERRORS.prefix} ${errMsg}`);
};

export default throwError;

import { ERRORS } from '../constants/messages.js';

const throwError = (errMsg) => {
  throw new Error(`${ERRORS.prefix} ${errMsg}`);
};

export default throwError;

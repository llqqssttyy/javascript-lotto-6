import throwError from './throwError.js';

import { TICKET_PRICE } from '../constants/constants.js';
import { MESSAGES } from '../constants/messages.js';

export const isEmptyString = (str) => {
  if (str.trim() === '') throwError(MESSAGES.ERRORS.isNaN);
};

export const isPositive = (str) => {
  if (!(Number(str) >= 0)) throwError(MESSAGES.ERRORS.isNotPositive);
};

export const isInteger = (str) => {
  if (!Number.isInteger(Number(str))) throwError(MESSAGES.ERRORS.isNotInteger);
};

export const isValidCost = (cost) => {
  if (Number(cost) % TICKET_PRICE) throwError(MESSAGES.ERRORS.invalidMoney);
};

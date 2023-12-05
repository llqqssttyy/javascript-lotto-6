import throwError from './throwError.js';

import {
  MAX_DRAW_SIZE,
  MAX_RANGE,
  MIN_RANGE,
  NUMBER_SEPERATOR,
  TICKET_PRICE,
} from '../constants/constants.js';
import { MESSAGES } from '../constants/messages.js';

// Common
export const isEmptyString = (str) => {
  if (str.trim() === '') throwError(MESSAGES.ERRORS.isEmpty);
};

export const isPositive = (str) => {
  if (!(Number(str) > 0)) throwError(MESSAGES.ERRORS.isNotPositive);
};

export const isInteger = (str) => {
  if (!Number.isInteger(Number(str))) throwError(MESSAGES.ERRORS.isNotInteger);
};

// LottoMachine
export const isValidCost = (cost) => {
  if (Number(cost) % TICKET_PRICE) throwError(MESSAGES.ERRORS.invalidMoney);
};

// WinningLotto
export const invalidNumbersFormat = (str) => {
  if (str.split(NUMBER_SEPERATOR).length !== MAX_DRAW_SIZE)
    throwError(MESSAGES.ERRORS.invalidNumbersForm);
};

// Lotto
export const hasOnlyInteger = (numbers) => {
  const result = numbers.every((number) => {
    const num = Number(number);
    return !Number.isNaN(num) && Number.isInteger(num);
  });

  if (!result) throwError(MESSAGES.ERRORS.isNotInteger);
};

export const checkAllNumbersInRange = (numbers) => {
  const result = numbers.every((number) => {
    const num = Number(number);
    return num <= MAX_RANGE && num >= MIN_RANGE;
  });

  if (!result) throwError(MESSAGES.ERRORS.invalidRange);
};

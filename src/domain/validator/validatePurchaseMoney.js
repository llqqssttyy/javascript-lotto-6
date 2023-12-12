import {
  MIN_NUMBER_OF_PURCHASE_MONEY,
  PRICE_PER_LOTTO,
} from '../../constants/constants.js';

export const isWhitespace = (money) => {
  return money.trim() === '';
};

export const isNaN = (money) => {
  return Number.isNaN(Number(money));
};

export const isInvalidRange = (money) => {
  return (
    Number(money) <= MIN_NUMBER_OF_PURCHASE_MONEY ||
    !Number.isInteger(Number(money))
  );
};

export const isInvalidUnit = (money) => {
  return Number(money) % PRICE_PER_LOTTO !== 0;
};

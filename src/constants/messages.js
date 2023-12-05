import { TICKET_PRICE } from './constants.js';

const INPUTS = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
});

const OUTPUTS = Object.freeze({});

const ERRORS = Object.freeze({
  prefix: '[ERROR]',

  isNaN: '입력 값은 숫자여야 합니다.',
  isNotPositive: '입력 값은 양수여야 합니다.',
  isNotInteger: '입력 값은 정수여야 합니다.',

  invalidMoney: `로또 구매는 ${TICKET_PRICE.toLocaleString()}원 단위로만 가능합니다.`,
});

export const MESSAGES = Object.freeze({
  INPUTS,
  OUTPUTS,
  ERRORS,
});

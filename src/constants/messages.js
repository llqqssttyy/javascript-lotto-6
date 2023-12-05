import { TICKET_PRICE } from './constants.js';

const INPUTS = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
});

const OUTPUTS = Object.freeze({});

const ERRORS = Object.freeze({
  prefix: '[ERROR]',

  invalidPurchaseMoney: `구입 금액은 ${TICKET_PRICE.toLocaleString()}원 단위어야 합니다.`,
});

export const MESSAGES = Object.freeze({
  ...INPUTS,
  ...OUTPUTS,
});

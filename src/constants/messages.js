import { MAX_RANGE, MIN_RANGE, TICKET_PRICE } from './constants.js';

const INPUTS = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',

  winningNumbers: '당첨 번호를 입력해 주세요.\n',

  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUTS = Object.freeze({
  printTotalAmountOfLotto(lottos) {
    return `\n${lottos.length}개를 구매했습니다.`;
  },

  printLottosNumbers(lottos) {
    const messages = lottos.map((lottoNumbers) => {
      return `[${lottoNumbers.join(', ')}]`;
    });

    return messages.join('\n');
  },
});

const ERRORS = Object.freeze({
  prefix: '[ERROR]',

  isEmpty: '공백 문자는 입력할 수 없습니다.\n',
  isNotPositive: '입력 값은 양수여야 합니다.\n',
  isNotInteger: '입력 값은 정수여야 합니다.\n',

  invalidMoney: `로또 구매는 ${TICKET_PRICE.toLocaleString()}원 단위로만 가능합니다.\n`,

  invalidNumbersForm: '로또 번호는 6개여야 합니다.\n',
  invalidRange: `로또 숫자는 ${MIN_RANGE}부터 ${MAX_RANGE} 사이의 정수만 가능합니다.\n`,
});

export const MESSAGES = Object.freeze({
  INPUTS,
  OUTPUTS,
  ERRORS,
});

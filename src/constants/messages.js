import { NUMBER_SEPERATOR } from './constants.js';
import { PRIZES, WINNING_STANDARDS } from './winningStandards.js';

export const INPUTS = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
});

export const OUTPUTS = Object.freeze({
  purchasLottosMsg(issueCnt) {
    return `\n${issueCnt}개를 구매했습니다.`;
  },
  purchaseLottos(lottos) {
    return lottos
      .map((numbers) => {
        return `[${numbers.join(NUMBER_SEPERATOR)}]`;
      })
      .join('\n');
  },

  winningNumbersMsg: '\n당첨 번호',
  winningNumbers(winningNums, bonusNum) {
    const ADDER = ' + ';

    const winnignNumsResult = `[${winningNums.join(NUMBER_SEPERATOR)}]`;
    const bonusNumResult = `[${bonusNum}]`;

    return ''.concat(winnignNumsResult, ADDER, bonusNumResult);
  },

  gameResultsMsg: '\n당첨 결과',
  gameResults(lottoResults) {
    return `[${lottoResults
      .map(({ number, isWinningNumber, isBonusMatch }) => {
        return `${isWinningNumber ? '✓' : ''}${
          isBonusMatch ? '•' : ''
        }${number}`;
      })
      .join(NUMBER_SEPERATOR)}]`;
  },

  statisticsMsg: '\n당첨 통계',
  divider: '---',
  winningLottoCnts(cnts) {
    return Object.entries(cnts)
      .map(([prizeKey, prizeCnt]) => {
        return `${WINNING_STANDARDS[prizeKey].matchCnt}개 일치 (${PRIZES[
          prizeKey
        ].toLocaleString()}원) - ${prizeCnt}개`;
      })
      .reverse()
      .join('\n');
  },
  statistics(percent) {
    return `총 수익률은 ${percent.toFixed(1)}%입니다.`;
  },
});

export const ERRORS = Object.freeze({
  prefix: '[ERROR]',

  whitespace: '공백 문자는 입력할 수 없습니다.\n',
  invalidNumber: '유효하지 않은 숫자입니다.\n',
  invalidRange: '유효하지 않은 범위의 숫자입니다.\n',
  invalidUnit: '구입금액은 1,000원 단위여야 합니다.\n',
});

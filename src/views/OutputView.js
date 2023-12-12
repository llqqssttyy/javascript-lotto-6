import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../constants/messages.js';

class OutputView {
  /**
   * 로또 발행 결과를 출력
   * @param {number} amount
   * @param {Array<number[]>} lottos
   */
  printPurchaseResult(issueCnt, lottos) {
    const { purchasLottosMsg, purchaseLottos } = OUTPUTS;

    Console.print(purchasLottosMsg(issueCnt));
    Console.print(purchaseLottos(lottos));
  }

  printWinningNumbers(winningNums, bonusNum) {
    const { winningNumbersMsg, winningNumbers } = OUTPUTS;

    Console.print(winningNumbersMsg);
    Console.print(winningNumbers(winningNums, bonusNum));
  }
}

export default OutputView;

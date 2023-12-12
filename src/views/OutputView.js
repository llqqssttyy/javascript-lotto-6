import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../constants/messages.js';

class OutputView {
  /**
   * 로또 발행 결과를 출력
   * @param {number} amount
   * @param {Array<number[]>} lottos
   */
  printPurchaseResult(amount, lottos) {
    const { amountOfTickets, purchaseLottos } = OUTPUTS;

    Console.print(amountOfTickets(amount));
    Console.print(purchaseLottos(lottos));
  }
}

export default OutputView;

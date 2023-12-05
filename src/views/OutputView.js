import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class OutputView {
  printPurchaseResult(lottosNumbers) {
    const { printTotalAmountOfLotto, printLottosNumbers } = MESSAGES.OUTPUTS;

    Console.print(printTotalAmountOfLotto(lottosNumbers));
    Console.print(printLottosNumbers(lottosNumbers));
  }
}

export default OutputView;

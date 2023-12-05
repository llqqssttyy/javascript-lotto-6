import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class InputView {
  async getPurchaseMoney() {
    const purchaseMoney = await Console.readLineAsync(
      MESSAGES.INPUTS.purchaseMoney,
    );
    return purchaseMoney;
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUTS.winningNumbers,
    );
    return winningNumbers;
  }
}

export default InputView;

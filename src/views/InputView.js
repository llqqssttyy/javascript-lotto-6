import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class InputView {
  async getPurchaseMoney() {
    const purchaseMoney = await Console.readLineAsync(MESSAGES.purchaseMoney);
    return purchaseMoney;
  }
}

export default InputView;

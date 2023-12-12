import { Console } from '@woowacourse/mission-utils';
import { INPUTS } from '../constants/messages.js';

class InputView {
  async getMoney() {
    const money = await Console.readLineAsync(INPUTS.purchaseMoney);
    return money;
  }
}

export default InputView;

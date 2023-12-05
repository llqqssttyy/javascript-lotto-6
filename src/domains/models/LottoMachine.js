import { MissionUtils } from '@woowacourse/mission-utils';

import {
  MAX_DRAW_SIZE,
  MIN_RANGE,
  MAX_RANGE,
  TICKET_PRICE,
} from '../../constants/constants.js';

import {
  isEmptyString,
  isInteger,
  isPositive,
  isValidCost,
} from '../../utils/validators.js';
import throwErrorWithValidators from '../../utils/throwErrorWithValidators.js';

import Lotto from '../../Lotto.js';
class LottoMachine {
  #ticketAmount;

  #lottos;

  constructor() {
    this.#lottos = [];
  }

  insertMoney(money) {
    this.#validate(money);
    this.#ticketAmount = money / TICKET_PRICE;
  }

  issueLottos() {
    while (this.#lottos.length < this.#ticketAmount) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        MIN_RANGE,
        MAX_RANGE,
        MAX_DRAW_SIZE,
      );

      this.#lottos.push(new Lotto(numbers.sort((a, b) => a - b)));
    }
  }

  get lottoNumbers() {
    return this.#lottos.map((lotto) => lotto.numbers);
  }

  #validate(money) {
    throwErrorWithValidators(money, [
      isEmptyString,
      isPositive,
      isInteger,
      isValidCost,
    ]);
  }
}

export default LottoMachine;

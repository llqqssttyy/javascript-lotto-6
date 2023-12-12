import { MissionUtils } from '@woowacourse/mission-utils';
import {
  MAX_NUMBER_OF_LOTTO,
  MIN_NUMBER_OF_LOTTO,
  NUMBERS_PER_LOTTO,
} from '../constants/constants.js';
import Lotto from '../Lotto.js';

/**
 * 로또 발행을 담당하는 클래스
 * 당첨 로또 발행도 포함
 * purchaseLottos: Lotto[]
 * winningLotto: Lotto
 * bonusNumber: number
 */
class LottoMachine {
  #purchaseLottos = [];

  #winningLotto;

  #bonusNumber;

  purchase(numOfLottos) {
    let curNumOfLottos = 0;
    while (curNumOfLottos < numOfLottos) {
      const numbers = this.#generateLottoNumbers();

      this.#purchaseLottos.push(new Lotto(numbers));

      curNumOfLottos++;
    }
  }

  get purchaseLottos() {
    return this.#purchaseLottos.map((lotto) => lotto.numbers);
  }

  #generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      MIN_NUMBER_OF_LOTTO,
      MAX_NUMBER_OF_LOTTO,
      NUMBERS_PER_LOTTO,
    );
  }
}

export default LottoMachine;

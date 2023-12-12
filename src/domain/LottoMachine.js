import { MissionUtils } from '@woowacourse/mission-utils';
import {
  MAX_NUMBER_OF_LOTTO,
  MIN_NUMBER_OF_LOTTO,
  NUMBERS_PER_LOTTO,
} from '../constants/constants.js';
import Lotto from '../Lotto.js';

class LottoMachine {
  #lottos = [];

  purchase(numOfLottos) {
    let curNumOfLottos = 0;
    while (curNumOfLottos < numOfLottos) {
      const numbers = this.#generateLottoNumbers();

      this.#lottos.push(new Lotto(numbers));

      curNumOfLottos++;
    }
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

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

  generatePurchaseLottos(numOfLottos) {
    let curNumOfLottos = 0;
    while (curNumOfLottos < numOfLottos) {
      const numbers = this.#generateLottoNumbers();

      this.#purchaseLottos.push(new Lotto(numbers));

      curNumOfLottos++;
    }
  }

  generateWinningLotto() {
    const numbers = this.#generateLottoNumbers();
    this.#winningLotto = new Lotto(numbers);
  }

  generateBonusNumber() {
    const number = this.#generateLottoNumber();

    if (this.#winningLotto.numbers.includes(number))
      this.#generateLottoNumbers();

    this.#bonusNumber = number;
  }

  get purchaseLottos() {
    return this.#purchaseLottos;
  }

  get purchaseLottosNumbers() {
    return this.#purchaseLottos.map((lotto) => lotto.numbers);
  }

  get winningNumbers() {
    return {
      winningNumbers: this.#winningLotto.numbers,
      bonusNumber: this.#bonusNumber,
    };
  }

  #generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      MIN_NUMBER_OF_LOTTO,
      MAX_NUMBER_OF_LOTTO,
      NUMBERS_PER_LOTTO,
    );
  }

  #generateLottoNumber() {
    return MissionUtils.Random.pickNumberInRange(
      MIN_NUMBER_OF_LOTTO,
      MAX_NUMBER_OF_LOTTO,
    );
  }
}

export default LottoMachine;

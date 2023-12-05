import Lotto from '../../Lotto.js';

import { NUMBER_SEPERATOR } from '../../constants/constants.js';

import throwErrorWithValidators from '../../utils/throwErrorWithValidators.js';
import { invalidNumbersFormat, isEmptyString } from '../../utils/validators.js';

class WinningLotto {
  #winningLotto;

  #bonusNumber;

  set winningLotto(numbers) {
    this.#validateWinningNumbers(numbers);
    this.#winningLotto = new Lotto(numbers.split(NUMBER_SEPERATOR));
  }

  set bonusNumber(number) {
    // this.#validateBonusNumber(number);
    this.#bonusNumber = Number(number);
  }

  #validateWinningNumbers(numbers) {
    throwErrorWithValidators(numbers, [isEmptyString, invalidNumbersFormat]);
  }
}

export default WinningLotto;

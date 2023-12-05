import Lotto from '../../Lotto.js';

import { NUMBER_SEPERATOR } from '../../constants/constants.js';
import { MESSAGES } from '../../constants/messages.js';
import throwError from '../../utils/throwError.js';

import throwErrorWithValidators from '../../utils/throwErrorWithValidators.js';
import {
  invalidNumbersFormat,
  isEmptyString,
  isInRange,
  isInteger,
  isPositive,
} from '../../utils/validators.js';

class WinningLotto {
  #winningLotto;

  #bonusNumber;

  set winningLotto(numbers) {
    this.#validateWinningNumbers(numbers);
    this.#winningLotto = new Lotto(
      numbers.split(NUMBER_SEPERATOR).map((number) => Number(number)),
    );
  }

  set bonusNumber(number) {
    this.#validateBonusNumber(number);
    this.#bonusNumber = Number(number);
  }

  #validateWinningNumbers(numbers) {
    throwErrorWithValidators(numbers, [isEmptyString, invalidNumbersFormat]);
  }

  #validateBonusNumber(number) {
    throwErrorWithValidators(number, [
      isEmptyString,
      isPositive,
      isInteger,
      isInRange,
    ]);

    if (this.#winningLotto.numbers.includes(Number(number)))
      throwError(MESSAGES.ERRORS.duplicatedNumber);
  }
}

export default WinningLotto;

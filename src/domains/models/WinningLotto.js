import throwErrorWithValidators from '../../utils/throwErrorWithValidators';
import { checkAllNumbersInRange, hasOnlyInteger } from '../../utils/validators';

class WinningLotto {
  #winningLotto;

  #bonusNumbers;

  set winningLotto(numbers) {
    // this.#validateWinningNumbers(numbers);
    this.#winningLotto = new Lotto(numbers);
  }

  // #validateWinningNumbers(numbers) {
  //   throwErrorWithValidators(numbers, [
  //     isEmptyString,
  //     hasOnlyInteger,
  //     checkAllNumbersInRange,
  //   ]);
  // }
}

export default WinningLotto;

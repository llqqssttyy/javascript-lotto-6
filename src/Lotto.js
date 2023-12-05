import throwErrorWithValidators from './utils/throwErrorWithValidators.js';
import { checkAllNumbersInRange, hasOnlyInteger } from './utils/validators.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    throwErrorWithValidators(numbers, [hasOnlyInteger, checkAllNumbersInRange]);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;

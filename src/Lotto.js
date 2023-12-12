import LottoNumber from './domain/LottoNumber.js';

/**
 * 로또 티켓 하나의 정보를 담고 있는 객체
 * numbers: LottoNumber[]
 */
class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map((number) => new LottoNumber(number));
  }

  get numbers() {
    return this.#numbers.map((lottoNumber) => lottoNumber.number);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
}

export default Lotto;

/**
 * 로또 티켓 하나의 정보를 담고 있는 객체
 * numbers: LottoNumber[]
 */
class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  /**
   * 로또의 당첨 여부를 반환하는 함수
   * @param {{number[], number}}
   * @returns {{number:number, isWinningNumber:boolean, isBonusMatch:boolean}[]}
   */
  getResult({ winningNumbers, bonusNumber }) {
    return this.#numbers.map((number) => {
      return {
        number,
        isWinningNumber: this.#isWinningNumber(winningNumbers, number),
        isBonusMatch: this.#isBonusMatch(bonusNumber),
      };
    });
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #isWinningNumber(winningNumbers, number) {
    return winningNumbers.includes(number);
  }

  #isBonusMatch(bonusNumber, number) {
    return bonusNumber === number;
  }
}

export default Lotto;

class LottoNumber {
  #number;

  constructor(number) {
    this.#number = number;
  }

  #isWinningNumber(winningNumbers) {
    return winningNumbers.includes(this.#number);
  }

  #isBonusMatch(bonusNumber) {
    return this.#number === bonusNumber;
  }

  get number() {
    return this.#number;
  }

  getResult(winningNumbers, bonusNumber) {
    return {
      number: this.#number,
      isWinningNumber: this.#isWinningNumber(winningNumbers),
      isBonusMatch: this.#isBonusMatch(bonusNumber),
    };
  }
}

export default LottoNumber;

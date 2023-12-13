import { PRICE_PER_LOTTO } from '../constants/constants.js';
import { ERRORS } from '../constants/messages.js';
import throwError from '../utils/throwError.js';
import LottoMachine from './LottoMachine.js';
import Prize from './Prize.js';
import Statistics from './Statistics.js';
import {
  isInvalidRange,
  isInvalidUnit,
  isNaN,
  isWhitespace,
} from './validator/validatePurchaseMoney.js';

class LottoGame {
  #issueCnt;

  #gameResults;

  #lottoMachine;

  #statistics;

  #prize;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#statistics = new Statistics();
    this.#prize = new Prize();
  }

  purchaseLotto(purchaseMoney) {
    this.#validateMoney(purchaseMoney);

    this.#issueCnt = purchaseMoney / PRICE_PER_LOTTO;
    this.#lottoMachine.generatePurchaseLottos(this.#issueCnt);
  }

  pickWinningNumbers() {
    this.#lottoMachine.generateWinningLotto();
    this.#lottoMachine.generateBonusNumber();
  }

  calcStatistics() {
    this.#prize.setWinningLottosCnts(this.gameResults);
    this.#statistics.totalPurchasePrice = this.#issueCnt * PRICE_PER_LOTTO;
    this.#statistics.totalPrize = this.#prize.totalPrize;
  }

  get issueCnt() {
    return this.#issueCnt;
  }

  get purchaseLottosNumbers() {
    return this.#lottoMachine.purchaseLottosNumbers;
  }

  get winningNumbers() {
    return this.#lottoMachine.winningNumbers;
  }

  get gameResults() {
    return this.#lottoMachine.gameResults;
  }

  get winningLottoCnts() {
    return this.#prize.winningLottosCnts;
  }

  get statistics() {
    const totalPrize = this.#prize.getTotalPrize(this.gameResults);
    const totalPurchasePrice = this.#issueCnt * PRICE_PER_LOTTO;
    return this.#statistics.getStatistics(totalPrize, totalPurchasePrice);
  }

  #validateMoney(purchaseMoney) {
    const { whitespace, invalidNumber, invalidRange, invalidUnit } = ERRORS;

    if (isWhitespace(purchaseMoney)) throwError(whitespace);

    if (isNaN(purchaseMoney)) throwError(invalidNumber);

    if (isInvalidRange(purchaseMoney)) throwError(invalidRange);

    if (isInvalidUnit(purchaseMoney)) throwError(invalidUnit);
  }
}

export default LottoGame;

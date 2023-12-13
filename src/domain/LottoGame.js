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
  // TODO: LottoGame에 numOfLottos가 꼭 필요한지 생각해 보기..
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

  calcGameResults() {
    const purchaseLottos = this.#lottoMachine.purchaseLottos;
    const winningNumbers = this.winningNumbers;
    this.#gameResults = purchaseLottos.map((lotto) => {
      return lotto.getResult(winningNumbers);
    });
  }

  calcStatistics() {
    this.#prize.setWinningLottosCnts(this.#gameResults);
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
    return this.#gameResults;
  }

  get winningLottoCnts() {
    return this.#prize.winningLottosCnts;
  }

  get statistics() {
    return this.#statistics.statistics;
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

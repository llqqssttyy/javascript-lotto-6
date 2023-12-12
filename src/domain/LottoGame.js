import { PRICE_PER_LOTTO } from '../constants/constants.js';
import { ERRORS } from '../constants/messages.js';
import throwError from '../utils/throwError.js';
import LottoMachine from './LottoMachine.js';
import {
  isInvalidRange,
  isInvalidUnit,
  isNaN,
  isWhitespace,
} from './validator/validatePurchaseMoney.js';

class LottoGame {
  // TODO: LottoGame에 numOfLottos가 꼭 필요한지 생각해 보기..
  #issueCnt;

  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
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

  get gameResult() {
    const purchaseLottos = this.#lottoMachine.purchaseLottos;
    const winningNumbers = this.winningNumbers;

    return purchaseLottos.map((lotto) => {
      return lotto.getResult(winningNumbers);
    });
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

  #validateMoney(purchaseMoney) {
    const { whitespace, invalidNumber, invalidRange, invalidUnit } = ERRORS;

    if (isWhitespace(purchaseMoney)) throwError(whitespace);

    if (isNaN(purchaseMoney)) throwError(invalidNumber);

    if (isInvalidRange(purchaseMoney)) throwError(invalidRange);

    if (isInvalidUnit(purchaseMoney)) throwError(invalidUnit);
  }
}

export default LottoGame;

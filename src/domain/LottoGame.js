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
  #numOfLottos;

  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  purchaseLotto(purchaseMoney) {
    this.#validateMoney(purchaseMoney);

    this.#numOfLottos = purchaseMoney / PRICE_PER_LOTTO;
    this.#lottoMachine.purchase(this.#numOfLottos);
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

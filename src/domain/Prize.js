import { WINNING_STANDARDS } from '../constants/winningStandards.js';

class Prize {
  #winningStandards;

  constructor() {
    this.#winningStandards = WINNING_STANDARDS;
  }

  getPrize(purchaseLotto) {}
}

export default Prize;

import { TICKET_PRICE } from '../../constants/constants';
import throwErrorWithValidators from '../../utils/throwErrorWithValidators';
import {
  isEmptyString,
  isInteger,
  isPositive,
  isValidCost,
} from '../../utils/validators';

class LottoMachine {
  #ticketAmount;

  insertMoney(money) {
    this.#validate(money);
    this.#ticketAmount = money / TICKET_PRICE;
  }

  get ticketAmount() {
    return this.#ticketAmount;
  }

  #validate(money) {
    throwErrorWithValidators(money, [
      isEmptyString,
      isPositive,
      isInteger,
      isValidCost,
    ]);
  }
}

export default LottoMachine;

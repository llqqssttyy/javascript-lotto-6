import { Console } from '@woowacourse/mission-utils';
import { OUTPUTS } from '../constants/messages.js';

class OutputView {
  printPurchaseResult(amount, tickets) {
    const { amountOfTickets, purchaseTickets } = OUTPUTS;

    Console.print(amountOfTickets(amount));
    Console.print(purchaseTickets(tickets));
  }
}

export default OutputView;

import { handleException } from '../utils/handleException';
import LottoMachine from '../domains/models/LottoMachine';

class LottoController {
  #outputView;

  #inputView;

  #lottoMachine;

  constructor(outputView, inputView, lottoMachine) {
    this.#outputView = outputView;
    this.#inputView = inputView;
    this.#lottoMachine = lottoMachine;
  }

  async start() {
    await handleException(async () => await this.#purchaseTicket());
  }

  async #purchaseTicket() {
    const purchaseMoney = await this.#inputView.getPurchaseMoney();
    this.#lottoMachine.insertMoney(purchaseMoney);
  }
}

export default LottoController;

import { handleException } from '../utils/handleException.js';

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
    await handleException(async () => await this.#purchaseLotto());

    this.#outputView.printPurchaseResult(this.#lottoMachine.lottoNumbers);
  }

  async #purchaseLotto() {
    const purchaseMoney = await this.#inputView.getPurchaseMoney();
    this.#lottoMachine.insertMoney(purchaseMoney);
    this.#lottoMachine.issueLottos();
  }
}

export default LottoController;

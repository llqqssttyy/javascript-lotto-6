import { handleException } from '../utils/handleException.js';

class LottoGameController {
  #inputView;

  #outputView;

  #lottoGame;

  constructor(inputView, outputView, lottoGame) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#lottoGame = lottoGame;
  }

  async start() {
    await handleException(async () => this.#purchaseLotto());
  }

  async #purchaseLotto() {
    const purchaseMoney = await this.#inputView.getMoney();
    this.#lottoGame.purchaseLotto(purchaseMoney);
  }
}

export default LottoGameController;

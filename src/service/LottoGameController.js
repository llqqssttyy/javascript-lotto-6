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
    this.#printPurchaseResult();

    this.#printWinningNumbers();
  }

  async #purchaseLotto() {
    const purchaseMoney = await this.#inputView.getMoney();
    this.#lottoGame.purchaseLotto(purchaseMoney);
  }

  #printPurchaseResult() {
    const { issueCnt, purchaseLottos } = this.#lottoGame;
    this.#outputView.printPurchaseResult(issueCnt, purchaseLottos);
  }

  #printWinningNumbers() {
    this.#lottoGame.pickWinningNumbers();

    const { winningNumbers, bonusNumber } = this.#lottoGame.winningNumbers;
    this.#outputView.printWinningNumbers(winningNumbers, bonusNumber);
  }
}

export default LottoGameController;

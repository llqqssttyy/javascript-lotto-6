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

    this.#printWinningResult();

    this.#printStatisticsResult();
  }

  async #purchaseLotto() {
    const purchaseMoney = await this.#inputView.getMoney();
    this.#lottoGame.purchaseLotto(purchaseMoney);
  }

  #printPurchaseResult() {
    const { issueCnt, purchaseLottosNumbers } = this.#lottoGame;
    this.#outputView.printPurchaseResult(issueCnt, purchaseLottosNumbers);
  }

  #printWinningNumbers() {
    this.#lottoGame.pickWinningNumbers();

    const { winningNumbers, bonusNumber } = this.#lottoGame.winningNumbers;
    this.#outputView.printWinningNumbers(winningNumbers, bonusNumber);
  }

  #printWinningResult() {
    const { gameResults } = this.#lottoGame;
    this.#outputView.printGameResults(gameResults);
  }

  #printStatisticsResult() {
    this.#lottoGame.calcStatistics();

    const { winningLottoCnts, statistics } = this.#lottoGame;
    this.#outputView.printStatistics(winningLottoCnts, statistics);
  }
}

export default LottoGameController;

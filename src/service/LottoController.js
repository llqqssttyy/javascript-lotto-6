import WinningLotto from '../domains/models/WinningLotto.js';
import { handleException } from '../utils/handleException.js';

class LottoController {
  #outputView;

  #inputView;

  #lottoMachine;

  #winningLotto;

  constructor(outputView, inputView, lottoMachine, winningLotto) {
    this.#outputView = outputView;
    this.#inputView = inputView;
    this.#lottoMachine = lottoMachine;
    this.#winningLotto = winningLotto;
  }

  async start() {
    await handleException(async () => await this.#purchaseLotto());

    this.#outputView.printPurchaseResult(this.#lottoMachine.lottoNumbers);

    await handleException(async () => await this.#setWinningNumbers());
    await handleException(async () => await this.#setBonusNumber());
  }

  async #purchaseLotto() {
    const purchaseMoney = await this.#inputView.getPurchaseMoney();
    this.#lottoMachine.insertMoney(purchaseMoney);
    this.#lottoMachine.issueLottos();
  }

  async #setWinningNumbers() {
    const winningNumbers = await this.#inputView.getWinningNumbers();
    this.#winningLotto.winningLotto = winningNumbers;
  }

  async #setBonusNumber() {
    const bonusNumber = await this.#inputView.getBonusNumber();
    this.#winningLotto.bonusNumber = bonusNumber;
  }
}

export default LottoController;

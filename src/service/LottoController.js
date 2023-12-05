import { Console } from '@woowacourse/mission-utils';

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
    const purchaseMoney = await this.#inputView.getPurchaseMoney();
  }
}

export default LottoController;

import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

import LottoController from './service/LottoController.js';
import LottoMachine from './domains/models/LottoMachine.js';
import WinningLotto from './domains/models/WinningLotto.js';

class App {
  async play() {
    const lottoController = new LottoController(
      new OutputView(),
      new InputView(),
      new LottoMachine(),
      new WinningLotto(),
    );

    await lottoController.start();
  }
}

export default App;

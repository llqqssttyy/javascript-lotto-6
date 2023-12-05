import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

import LottoController from './service/LottoController.js';
import LottoMachine from './domains/models/LottoMachine.js';

class App {
  async play() {
    const lottoController = new LottoController(
      new OutputView(),
      new InputView(),
      new LottoMachine(),
    );

    await lottoController.start();
  }
}

export default App;

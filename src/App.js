import LottoGame from './domain/LottoGame.js';
import LottoGameController from './service/LottoGameController.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    const controller = new LottoGameController(
      new InputView(),
      new OutputView(),
      new LottoGame(),
    );
    await controller.start();
  }
}

export default App;

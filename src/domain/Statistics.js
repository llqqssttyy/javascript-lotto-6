import Prize from './Prize.js';

class Statistics {
  #prize;

  #gameResults;

  constructor() {
    this.#prize = new Prize();
  }

  set gameResults(gameResults) {
    this.#gameResults = gameResults;
  }

  get gameResults() {
    return this.#gameResults;
  }

  get statistics() {
    this.#prize.setWinningLottosCnt(this.#gameResults);
  }
}

export default Statistics;

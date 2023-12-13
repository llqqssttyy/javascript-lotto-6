import {
  PRIZES,
  PRIZE_KEYS,
  WINNING_STANDARDS,
} from '../constants/winningStandards.js';

class Prize {
  #winningLottosCnts;

  setWinningLottosCnts(gameResults) {
    const matchedInfos = this.#getMatchedInfo(gameResults);
    this.#winningLottosCnts = this.#getWinningLottoCnts(matchedInfos);
  }

  getTotalPrize(gameResults) {
    const matchedInfos = this.#getMatchedInfo(gameResults);
    const winningLottosCnts = this.#getWinningLottoCnts(matchedInfos);

    return Object.entries(winningLottosCnts).reduce(
      (totalPrize, [prizeKey, prizeCnt]) => {
        if (prizeCnt !== 0)
          totalPrize = totalPrize + PRIZES[prizeKey] * prizeCnt;
        return totalPrize;
      },
      0,
    );
  }

  get winningLottosCnts() {
    return this.#winningLottosCnts;
  }
  /**
   * 로또
   * @param {Array<Array<{number: number, isWinningNumber: boolean, isBonusMatch: boolean}>>} gameResults
   */
  #getMatchedInfo(gameResults) {
    return gameResults.map((gameResult) => {
      return gameResult.reduce(
        (matchInfo, { isWinningNumber, isBonusMatch }) => {
          if (isWinningNumber) matchInfo.matchCnt += 1;

          if (isBonusMatch) matchInfo.bonusMatch = true;

          return matchInfo;
        },
        { matchCnt: 0, bonusMatch: false },
      );
    });
  }

  #getWinningLottoCnts(matchedInfos) {
    return matchedInfos.reduce(
      (count, { matchCnt, bonusMatch }) => {
        Object.entries(WINNING_STANDARDS).forEach(
          ([prizeKey, prizeCondition]) => {
            if (
              prizeCondition.bonusMatch === bonusMatch &&
              prizeCondition.matchCnt === matchCnt
            )
              count[prizeKey] = (count[prizeKey] || 0) + 1;
          },
        );
        return count;
      },
      Object.fromEntries(PRIZE_KEYS.map((key) => [key, 0])),
    );
  }
}

export default Prize;

import {
  PRIZE_KEYS,
  WINNING_STANDARDS,
} from '../constants/winningStandards.js';

class Prize {
  #winningLottosCnt;

  setWinningLottosCnt(gameResults) {
    const matchedInfos = gameResults.map((gameResult) => {
      return this.#matchInfo(gameResult);
    });

    const result = matchedInfos.reduce(
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
    console.log(result);
  }

  /**
   * 로또 하나의 상금 금액을 구함
   * @param {Array<{number: number, isWinningNumber: boolean, isBonusMatch: boolean}>} gameResults
   */
  #matchInfo(lotto) {
    return lotto.reduce(
      (matchInfo, { isWinningNumber, isBonusMatch }) => {
        if (isWinningNumber) matchInfo.matchCnt += 1;

        if (isBonusMatch) matchInfo.bonusMatch = true;

        return matchInfo;
      },
      { matchCnt: 0, bonusMatch: false },
    );
  }

  get winningLottsCnt() {
    return this.#winningLottosCnt;
  }
}

export default Prize;

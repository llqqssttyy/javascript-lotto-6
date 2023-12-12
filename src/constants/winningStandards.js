export const WINNING_STANDARDS = Object.freeze({
  FIRST_PRIZE: {
    matchCnt: 6,
    bonusMatch: false,
  },
  SECOND_PRIZE: {
    matchCnt: 5,
    bonusMatch: true,
  },
  THIRD_PRIZE: {
    matchCnt: 5,
    bonusMatch: false,
  },
  FOURTH_PRIZE: {
    matchCnt: 4,
    bonusMatch: false,
  },
  FIFTH_PRIZE: {
    matchCnt: 3,
    bonusMatch: false,
  },
});

export const PRIZES = Object.freeze({
  FIFTH_PRIZE: 5_000,
  FOURTH_PRIZE: 50_000,
  THIRD_PRIZE: 1_500_000,
  SECOND_PRIZE: 30_000_000,
  FIRST_PRIZE: 2_000_000_000,
});

export const PRIZE_KEYS = [
  'FIRST_PRIZE',
  'SECOND_PRIZE',
  'THIRD_PRIZE',
  'FOURTH_PRIZE',
  'FIFTH_PRIZE',
];

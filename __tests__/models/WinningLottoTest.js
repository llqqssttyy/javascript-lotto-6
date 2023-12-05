import WinningLotto from '../../src/domains/models/WinningLotto';

describe('WinningLotto validator 테스트', () => {
  test.each(['', '1-2-3-4-5-6', '1,1,2,3,4,5,6', '1,2,3,4,5,46'])(
    '우승 번호 validator 작동 테스트',
    (inputs) => {
      const winningLotto = new WinningLotto();
      expect(() => (winningLotto.winningLotto = inputs)).toThrow('[ERROR]');
    },
  );

  test.each(['1,2,3,4,5,6'])('우승 번호 validator 통과 테스트', (inputs) => {
    const winningLotto = new WinningLotto();
    expect(() => (winningLotto.winningLotto = inputs)).not.toThrow('[ERROR]');
  });

  test.each([
    { winningNumbers: '1,2,3,4,5,6', bonusNumber: '' },
    { winningNumbers: '1,2,3,4,5,6', bonusNumber: '-1' },
    { winningNumbers: '1,2,3,4,5,6', bonusNumber: '1.1' },
    { winningNumbers: '1,2,3,4,5,6', bonusNumber: '49' },
    { winningNumbers: '1,2,3,4,5,6', bonusNumber: '1' },
  ])(' validator 작동 테스트', ({ winningNumbers, bonusNumber }) => {
    const winningLotto = new WinningLotto();
    winningLotto.winningLotto = winningNumbers;

    expect(() => (winningLotto.bonusNumber = bonusNumber)).toThrow('[ERROR]');
  });
});

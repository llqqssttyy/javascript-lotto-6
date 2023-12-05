import WinningLotto from '../../src/domains/models/WinningLotto';

describe('WinningLotto validator 테스트', () => {
  test.each(['', '1-2-3-4-5-6', '1,1,2,3,4,5,6', '1,2,3,4,5,46'])(
    '작동 테스트',
    (inputs) => {
      const winningLotto = new WinningLotto();
      expect(() => (winningLotto.winningLotto = inputs)).toThrow('[ERROR]');
    },
  );

  test.each(['1,2,3,4,5,6'])('통과 테스트', (inputs) => {
    const winningLotto = new WinningLotto();
    expect(() => (winningLotto.winningLotto = inputs)).not.toThrow('[ERROR]');
  });
});

import LottoMachine from '../../src/domains/models/LottoMachine.js';

describe('LottoMachine validator 테스트', () => {
  test.each([' ', '-1', 'abc', '0.265', '1001'])('작동 테스트', (input) => {
    const lottoMachine = new LottoMachine();
    expect(() => lottoMachine.insertMoney(input)).toThrow('[ERROR]');
  });

  test.each(['1000', '2000'])('통과 테스트', (input) => {
    const lottoMachine = new LottoMachine();
    expect(() => lottoMachine.insertMoney(input)).not.toThrow('[ERROR]');
  });
});

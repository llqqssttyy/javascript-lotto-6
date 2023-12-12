export const INPUTS = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
});

export const OUTPUTS = Object.freeze({
  amountOfTickets(amontOfTickets) {
    return `${this.amountOfTickets}개를 구매했습니다.`;
  },
  purchaseTickets(tickets) {},
});

export const ERRORS = Object.freeze({
  prefix: '[ERROR]',

  whitespace: '공백 문자는 입력할 수 없습니다.\n',
  invalidNumber: '유효하지 않은 숫자입니다.\n',
  invalidRange: '유효하지 않은 범위의 숫자입니다.\n',
  invalidUnit: '구입금액은 1,000원 단위여야 합니다.\n',
});

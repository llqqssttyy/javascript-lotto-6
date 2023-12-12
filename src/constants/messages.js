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
});

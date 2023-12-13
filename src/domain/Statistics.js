class Statistics {
  #totalPurchasePrice;

  #totalPrize;

  set totalPurchasePrice(totalPurchasePrice) {
    this.#totalPurchasePrice = totalPurchasePrice;
  }

  set totalPrize(totalPrize) {
    this.#totalPrize = totalPrize;
  }

  get statistics() {
    return (this.#totalPrize / this.#totalPurchasePrice) * 100;
  }

  getStatistics(totalPrize, totalPurchasePrice) {
    return (totalPrize / totalPurchasePrice) * 100;
  }
}

export default Statistics;

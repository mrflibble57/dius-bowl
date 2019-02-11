export class Frame {

  score: number[] = [];
  constructor() {
  }
  get total() {
    return this.score.reduce((comb, val) => comb + val, 0);
  }
  get complete() {
    return  (this.score.length === 1 && this.total === 10) ||    // strike
      (this.score.length === 2);
  }

  get available() {
    return this.score.length === 0 ? 10 : 10 - this.total;
  }
}

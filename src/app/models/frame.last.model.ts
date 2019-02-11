import {Frame} from './frame.model';

export class FrameLast extends Frame {

  get complete() {
    return  (this.score.length === 3) ||                           // final frame 3 bowls
            (this.score.length === 2 && this.total < 10);  // final frame with no strike to start
  }

  get available() {
    if (!this.score.length) {                             // no bowls
      return 10;
    } else if (this.score.length === 1) {                 // 1 score
      if (this.score[0] < 10) {                           // and it wasn't a strike
        return 10 - this.score[0];
      }
      return 10;
    } else if (this.score.length === 2) {                 // 2 scores
      if (this.score[0] === 10 && this.score[1] < 10) {   // first is a strike and the second isn't
        return 10 - this.score[1];
      }
      return 10;
    }
  }

}

import {Frame} from './frame.model';
import {FrameLast} from './frame.last.model';

export class Game {

  frames: Frame[] = [];

  constructor() {
    for (let x = 0; x < 9; x++) {
      this.frames.push(new Frame());
    }
    this.frames.push(new FrameLast());
  }

  get frame() {
    return this.frames.filter(f => !f.complete)[0];
  }

  get complete() {
    return this.frames[9].complete;
  }
}

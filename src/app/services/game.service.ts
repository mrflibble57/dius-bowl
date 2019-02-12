import { Injectable } from '@angular/core';
import {Frame} from '../models/frame.model';
import {BehaviorSubject} from 'rxjs';
import {FrameLast} from '../models/frame.last.model';
import {Game} from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;
  errorSubject = new BehaviorSubject<string>('');
  framesSubject = new BehaviorSubject<Frame[]>(null);
  scoreSubject = new BehaviorSubject<number>(0);

  constructor() { }

  /**
   * Clear the decks for the start of the game.
   */
  start() {
    this.game = new Game();
    this.framesSubject.next(this.game.frames);
    this.scoreSubject.next(0);
    return true;
  }

  /**
   * Roll the ball and knock down the available pins in the current frame
   * @param value a number of pins knocked down
   * @returns a boolean indicating if the game is still in play
   */
  roll(value: number) {
    if (!this.game.complete) {
      const frame = this.game.frame;
      if (value <= frame.available) {
        frame.score.push(value);
        this.score();
      } else {
        this.errorSubject.next(`Pretty sneaky, sis. Try a lower number than ${value}.`);
      }
      return !this.game.complete;
    }

  }

  /**
   * Score will add up the total for the current game and send the result out to an Observer
   */
  score() {
    let total = 0;
    const scoringShots: number[] = [];        // store scoring shots from all frames
    this.game.frames.forEach(frame => {
      frame.score.forEach(score => scoringShots.push(score));
    });
    while (scoringShots.length < 21) {        // pad for progressive score, and final frame strike/frame possibility
      scoringShots.push(0);
    }

    let pos = 0;
    for (let x = 0; x < 10; x++) {
      let frameScore = scoringShots[pos];
      if (frameScore === 10) {                // a strike gets the bonus value of the two following shots
        frameScore += scoringShots[pos + 1] + scoringShots[pos + 2];
        pos++;
      } else {
        frameScore += scoringShots[pos + 1];  // get the second ball in the frame
        if (frameScore === 10) {              // a spare gets the bonus value of the following shot
          frameScore += scoringShots[pos + 2];
        }
        pos += 2;
      }
      total += frameScore;
    }
    this.scoreSubject.next(total);
  }

}

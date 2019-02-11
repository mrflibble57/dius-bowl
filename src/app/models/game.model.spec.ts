import { TestBed } from '@angular/core/testing';
import {Frame} from './frame.model';
import {Game} from './game.model';
import {FrameLast} from './frame.last.model';

describe('Game', () => {


  it('should be created', () => {
    const game = new Game();
    expect(game).toBeTruthy();
  });

  it('should confirm it is incomplete', () => {
    const game = new Game();
    expect(game.complete).toBe(false);
  });

  it('should confirm it is incomplete', () => {
    const game = new Game();
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    game.playingFrame.score.push(2, 2);
    expect(game.complete).toBe(true);
  });


});

import {Game} from './game.model';

describe('Game', () => {

  it('should be created', () => {
    const game = new Game();
    expect(game).toBeTruthy();
  });

  it('should confirm it is incomplete', () => {
    const game = new Game();
    expect(game.complete).toBe(false);
  });

  it('should confirm it is complete', () => {
    const game = new Game();
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    game.frame.score.push(2, 2);
    expect(game.complete).toBe(true);
  });
});

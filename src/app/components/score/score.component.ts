import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-score',
  template: `<div class="score">
    <div>Score: </div>
    <div>{{score}}</div>
  </div>`,
})
export class ScoreComponent implements OnInit {
  score: number;
  constructor(gameService: GameService) {
    gameService.scoreSubject.subscribe(value => {
      this.score = value;
    });
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Frame} from '../../models/frame.model';

@Component({
  selector: 'app-table',
  template: `<div class="table">
    <div *ngFor="let frame of frames">
        {{frame.score.join(' + ')}}
    </div>
  </div>`,
})
export class TableComponent {
  frames: Frame[];

  constructor(gameService: GameService) {
    gameService.framesSubject.subscribe(value => {
      this.frames = value;
    });
  }

}

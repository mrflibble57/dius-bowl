import {Component, HostListener} from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>DiUS Bowl</h1>
      <h2>The Greatest Bowling Experience Known to Man</h2>
      <app-score></app-score>
      <div class="info" *ngIf="playing">Use the keys 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and X to score</div>
      <div class="roll" *ngIf="keyScore > -1">
        <div>{{keyScore}}</div>
        <div>Enter to confirm</div>
      </div>
      <div class="error" *ngIf="!!error"><div>{{error}}</div></div>
      <app-table></app-table>
      <div *ngIf="!playing">Press Enter to Restart</div>

    </div>
  `
})
export class AppComponent {
  keyScore: number;
  playing = true;
  error: string;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const code = event.key;
    if (this.playing) {
      this.error = '';
      switch (code) {
        case ' ':
          this.roll();
          break;
        case 'x':
        case 'X':
          this.roll(10);
          break;
        default:
          const val = parseInt(code, 10);
          if (!isNaN(val)) {
            this.roll(val);
          }
          break;
      }
    } else if (code === 'Enter') {
      this.start();
    }
  }

  constructor(public gameService: GameService) {
    gameService.errorSubject.subscribe(value => {
      this.error = value;
    });
    this.start();
  }

  start() {
    this.playing = this.gameService.start();
  }

  roll(score?: number) {
    this.keyScore = -1;
    if (!score) {
      score = Math.ceil(Math.random() * 5);
    }
    this.playing = this.gameService.roll(score);
  }
}

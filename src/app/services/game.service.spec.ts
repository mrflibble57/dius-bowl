import {TestBed} from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  const rolls = (... args) => { args.forEach(value => service.roll(value)); };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(GameService);
    service.start();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should error when a frame total is above 10', () => {
    service.roll(8);
    service.roll(8);
    const sub = service.errorSubject.subscribe(val => {
      expect(val).not.toBe('');
    });
  });

  it('should return 300', () => {
    while (service.roll(10)) {}
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(300);
    });
  });

  it('should return 80', () => {
    while (service.roll(4)) {}
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(80);
    });
  });

  it('should return 12', () => {
    rolls(5, 5, 1, 0);
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(12);
    });
  });

  it('should return 14', () => {
    rolls(10, 1, 1);
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(14);
    });
  });
});

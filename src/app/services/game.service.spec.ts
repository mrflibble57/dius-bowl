import {async, TestBed} from '@angular/core/testing';

import { GameService } from './game.service';

describe('PlayService', () => {
  let service: GameService;
  const rolls = (... args) => { args.forEach(value => service.roll(value)); };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 300', () => {
    service.start();
    while (service.roll(10)) {}
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(300);
    });
  });

  it('should return 80', () => {
    service.start();
    while (service.roll(4)) {}
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(80);
    });
  });

  it('should return 12', () => {
    service.start();
    rolls(5, 5, 1, 0);
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(12);
    });
  });

  it('should return 14', () => {
    service.start();
    rolls(10, 1, 1);
    const sub = service.scoreSubject.subscribe(val => {
      expect(val).toBe(14);
    });
  });
});

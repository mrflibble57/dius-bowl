import { TestBed } from '@angular/core/testing';
import {Frame} from './frame.model';

describe('Frame', () => {


  it('should be created', () => {
    const frame = new Frame();
    expect(frame).toBeTruthy();
  });

  it('should confirm it is incomplete', () => {
    const frame = new Frame();
    expect(frame.complete).toBe(false);
  });

  it('should confirm it is complete after two bowls', () => {
    const frame = new Frame();
    frame.score.push(4);
    frame.score.push(3);
    expect(frame.complete).toBe(true);
  });

  it('should confirm it is complete when a strike', () => {
    const frame = new Frame();
    frame.score.push(10);
    expect(frame.complete).toBe(true);
  });

  it('should confirm available pins', () => {
    const frame = new Frame();
    frame.score.push(4);
    expect(frame.available).toBe(6);
  });
});

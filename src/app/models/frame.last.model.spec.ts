import { TestBed } from '@angular/core/testing';
import {FrameLast} from './frame.last.model';

describe('Last Frame', () => {


  it('should be created', () => {
    const frame = new FrameLast();
    expect(frame).toBeTruthy();
  });

  it('should confirm it is incomplete', () => {
    const frame = new FrameLast();
    expect(frame.complete).toBe(false);
  });

  it(`should confirm it is complete after two non-spare'd bowls`, () => {
    const frame = new FrameLast();
    frame.score.push(4);
    frame.score.push(3);
    expect(frame.complete).toBe(true);
  });

  it('should confirm it is incomplete after two bowls when the first is a strike', () => {
    const frame = new FrameLast();
    frame.score.push(10);
    frame.score.push(3);
    expect(frame.complete).toBe(false);
  });

  it('should confirm it is incomplete after two bowls when the second is a spare', () => {
    const frame = new FrameLast();
    frame.score.push(7);
    frame.score.push(3);
    expect(frame.complete).toBe(false);
  });

  it('should confirm it is complete after three bowls', () => {
    const frame = new FrameLast();
    frame.score.push(10);
    frame.score.push(3);
    frame.score.push(6);
    expect(frame.complete).toBe(true);
  });

  it('should confirm the available pins after one bowl', () => {
    const frame = new FrameLast();
    frame.score.push(4);
    expect(frame.available).toBe(6);
  });

  it('should confirm the available pins after two bowls when the first is a strike', () => {
    const frame = new FrameLast();
    frame.score.push(10);
    expect(frame.available).toBe(10);
  });

  it('should confirm the available pins after two bowls when the second is a spare', () => {
    const frame = new FrameLast();
    frame.score.push(6);
    frame.score.push(4);
    expect(frame.available).toBe(10);
  });

  it('should confirm the available pins after two strikes', () => {
    const frame = new FrameLast();
    frame.score.push(10);
    frame.score.push(10);
    expect(frame.available).toBe(10);
  });
});

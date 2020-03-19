import { localStoreScore, getLocalScores, storeScores } from './localStorage-mock';

describe('Test modules belongin to gameHelper file', () => {
  const scores = getLocalScores();
  test('Receive [0, 0] when localStorage is empty', () => {
    expect(scores.length).toBe(2);
    expect(scores[0]).toBe(0);
    expect(scores[1]).toBe(0);
    scores[0] = 1000;
    scores[1] = 2000;
  });

  test('Store an array and request it back', () => {
    const scores = [1000, 2000];
    localStoreScore(scores);
    const result = getLocalScores();
    expect(result.length).toBe(scores.length);
    expect(result[0]).toBe(scores[0]);
    expect(result[1]).toBe(scores[1]);
  });

  test('Store an array, then store a bigger value and request it back', () => {
    const scores = [1000, 2000];
    localStoreScore(scores);
    scores[0] = 3000;
    storeScores(scores[0]);
    const result = getLocalScores();
    expect(result.length).toBe(scores.length);
    expect(result[0]).toBe(scores[0]);
    expect(result[1]).toBe(scores[0]);
  });
});
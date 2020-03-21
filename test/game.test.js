// import Player from './entityPlayer';
import gameRun from './game-mock';

describe('Tests on a Mocked game', () => {
  const game = gameRun();
  test('Receive an object in return when call gameRun', () => {
    expect(typeof game).toBe('object');
  });

  test('Expect to see the object that contains all the games scenes', () => {
    expect(typeof game.scene.scenes).toBe('object');
  });
});

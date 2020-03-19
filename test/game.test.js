// const Player = require('./entityPlayer');
// import Player from './entityPlayer';
import Phaser from './phaser';
import SceneIntro from './SceneIntro';

const config = {
  type: Phaser.WEBGL,
  parent: 'divld',
  width: 480,
  height: 640,
  backgroundColor: 'black',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    SceneIntro,
  ],
  pixelArt: true,
  roundPixels: true,
};

describe('', () => {
  const game = new Phaser.Game(config);
  // const player = new Player(game.scene.scenes[0], 0, 0, 'player');
  test('', () => {
    // expect(player.getData('speed')).toBe(200);
    expect(game.scene.scenes.lenght).toBe(5);
  });
});

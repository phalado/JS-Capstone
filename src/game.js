import Phaser from './phaser';
import SceneMainMenu from './SceneMainMenu';
import SceneMain from './SceneMain';
import SceneIntro from './SceneIntro';
import SceneGameOver from './SceneGameOver';

const config = {
  type: Phaser.WEBGL,
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
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
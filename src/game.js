import Phaser from './phaser';
import SceneMainMenu from './SceneMainMenu';
import SceneMain from './SceneMain';
import SceneIntro from './SceneIntro';
import SceneGameOver from './SceneGameOver';
import SceneLeaderBoard from './SceneLeaderBoard';

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
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
    SceneLeaderBoard,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
console.log(game.scene.scenes);
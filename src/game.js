import Phaser from 'phaser';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneMain from './scenes/SceneMain';
import SceneIntro from './scenes/SceneIntro';
import SceneAbout from './scenes/SceneAbout';
import SceneGameOver from './scenes/SceneGameOver';
import SceneLeaderBoard from './scenes/SceneLeaderBoard';

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
    SceneAbout,
    SceneMain,
    SceneGameOver,
    SceneLeaderBoard,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);

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

const game = new Phaser.Game(config);

import Phaser from './phaser';

class SceneIntro extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneIntro' });
  }

  preload() {
    this.load.image('gameT', 'content/gameTitle.png');
    this.load.image('longTimeAgo', 'content/longTimeAgo.png');
  }

  create() {
    this.title = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'longTimeAgo',
    );

    this.tweens.add({
      targets: this.title,
      alpha: { from: 0, to: 1 },
      ease: 'Linear',
      duration: 4000,
      repeat: 0,
      yoyo: true,
      onComplete: () => {
        this.scene.start('SceneMainMenu');
      },
    });

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if (this.keySpace.isDown) {
      this.scene.start('SceneMainMenu');
    }
  }
}

export default SceneIntro;
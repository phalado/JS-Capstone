import Phaser from './phaser';
import SceneMainMenu from './SceneMainMenu';

class SceneIntro extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneIntro' });
  }

  preload() {
    this.load.image('gameT', 'content/gameTitle.png');
    this.load.image('longTimeAgo', 'content/longTimeAgo.png');
  }

  create() {
    // this.title = this.add.text(this.game.config.width * 0.05, 128, 'A long time ago, in a galaxy far, far away...', {
    //   color: '#ffbe00',
    //   fontFamily: 'sans-serif',
    //   fontSize: '2vw',
    //   lineHeight: 1.3,
    //   transform: 'perspective(400px) rotateX(45deg)',
    // });

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
    });

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.goBack();
  }

  update() {
    if (this.keySpace.isDown) {
      this.scene.start('SceneMainMenu');
    }
  }

  goBack() {
    this.time.addEvent({
      delay: 8000,
      callback() {
        this.scene.start('SceneMainMenu');
      },
      callbackScope: this,
      loop: false,
    });
  }
}

export default SceneIntro;
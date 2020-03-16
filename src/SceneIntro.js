import Phaser from './phaser';

class SceneIntro extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneIntro' });
  }

  preload() {
    this.load.image('gameT', 'content/gameTitle.png');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'A long time ago, in a galaxy far, far away...', {
      color: '#ffbe00',
      fontFamily: 'sans-serif',
      fontSize: '2vw',
      lineHeight: 1.3,
      transform: 'perspective(400px) rotateX(45deg)',
    });

    this.title.setOrigin(0.5);

    this.time.addEvent({
      delay: 1000,
      callback() {
        this.titleFade(0, 1);
      },
      callbackScope: this,
      loop: false,
    });

  }

  update() {
    for (let i = 0; i < 20; i += 1) {
      this.title.y = (-this.title.displayHeight) + (this.title.displayHeight * i);
    }
  }

  titleFade(a, b) {
    this.tweens.add({
      targets: this.title,
      alpha: { from: a, to: b },
      ease: 'Linear',
      duration: 2000,
      repeat: 0,
      yoyo: false,
    });
  }

}

export default SceneIntro;


// const tween = this.tweens.add({
//   targets: this.title,
//   alpha: { from: 0, to: 1 },
//   ease: 'Linear',
//   duration: 2000,
//   repeat: 0,
//   yoyo: false,
// });
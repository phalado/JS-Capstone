import Phaser from './phaser';
import ScrollingBackground from './entityScrollingBackground';

class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  preload() {
    this.load.audio('gameOver', 'content/swImperialMarch.mp3');
    this.load.image('vader', 'content/vaderGameOver.jpg');
    this.load.image('goTitle', 'content/titleGameOver.png');
  }

  create() {
    this.goTitle = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.15,
      'goTitle',
    );

    this.goImage = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'vader',
    );

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver', { volume: 0.1 }),
      btnDown: this.sound.add('sndBtnDown', { volume: 0.1 }),
    };

    this.song = this.sound.add('gameOver', { volume: 0.1 });
    this.song.play();

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.85,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('sprBtnRestartHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnRestart.on('pointerout', () => {
      this.btnRestart.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', () => {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.song.stop();
      this.scene.start('SceneMain');
    }, this);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}

export default SceneGameOver;
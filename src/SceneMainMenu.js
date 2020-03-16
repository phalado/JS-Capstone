import Phaser from './phaser';
import ScrollingBackground from './entityScrollingBackground';

class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', 'content/sprBg0.png');
    this.load.image('sprBg1', 'content/sprBg1.png');
    this.load.image('sprBtnPlay', 'content/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'content/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'content/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', 'content/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', 'content/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', 'content/sprBtnRestartDown.png');
    this.load.image('gameTitle', 'content/gameTitle.png');

    this.load.audio('sndBtnOver', 'content/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'content/sndBtnDown.wav');
    this.load.audio('theme', 'content/starWarsTheme.mp3');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver', { volume: 0.1 }),
      btnDown: this.sound.add('sndBtnDown', { volume: 0.1 }),
    };

    // this.scene.start('SceneIntro');

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.btnPlay.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.song.stop();
      this.scene.start('SceneMain');
    }, this);

    this.gameTitle = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.3,
      'gameTitle',
    );

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.song = this.sound.add('theme', { volume: 0.1 });
    this.song.play();
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}

export default SceneMainMenu;
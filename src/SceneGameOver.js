import Phaser from './phaser';
import ScrollingBackground from './entityScrollingBackground';
import { getLocalScores } from './gameHelper';

class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  preload() {
    this.load.audio('gameOver', 'content/swImperialMarch.mp3');
    this.load.image('vader', 'content/vaderGameOver.jpg');
    this.load.image('gameOverTitle', 'content/titleGameOver2.png');
  }

  create() {
    this.gameOverTitle = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.1,
      'gameOverTitle',
    );

    this.gameOverImage = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.4,
      'vader',
    );

    this.scores = getLocalScores();
    this.gameOverSceneScore = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.65,
      `Score: ${this.scores[0]}`, {
        color: '#d0c600',
        fontFamily: 'sans-serif',
        fontSize: '3vw',
        lineHeight: 1.3,
        align: 'center',
      },
    );

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver', { volume: 0.1 }),
      btnDown: this.sound.add('sndBtnDown', { volume: 0.1 }),
    };

    this.song = this.sound.add('gameOver', { volume: 0.3 });
    this.song.play();

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.3,
      this.game.config.height * 0.9,
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

    this.btnRecord = this.add.sprite(
      this.game.config.width * 0.7,
      this.game.config.height * 0.9,
      'sprBtnRecord',
    );

    this.btnRecord.setInteractive();

    this.btnRecord.on('pointerover', () => {
      this.btnRecord.setTexture('sprBtnRecordHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnRecord.on('pointerout', () => {
      this.btnRecord.setTexture('sprBtnRecord');
    });

    this.btnRecord.on('pointerdown', () => {
      this.btnRecord.setTexture('sprBtnRecordDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRecord.on('pointerup', () => {
      this.btnRecord.setTexture('sprBtnRecord');
      this.song.stop();
      this.scene.start('SceneLeaderBoard');
    }, this);

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    const div = document.createElement('div');
    div.innerHTML = `
      <input type="text" name="nameField" placeholder="Enter your name" style="font-size: 32px">
      <input type="button" name="playButton" value="Let's Play" style="font-size: 32px">
    `;

    this.tweens.add({
      targets: element,
      y: 300,
      duration: 3000,
      ease: 'Power3',
    });
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }

    if (this.keySpace.isDown) {
      this.song.stop();
      this.scene.start('SceneMain');
    }
  }
}

export default SceneGameOver;
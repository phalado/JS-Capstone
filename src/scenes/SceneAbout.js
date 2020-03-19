import Phaser from '../phaser';
import ScrollingBackground from '../entities/entityScrollingBackground';

class SceneAbout extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneAbout' });
  }

  preload() {
    this.load.audio('victoryTheme', 'content/swVictoryTheme.mp3');
    this.load.image('aboutTitle', 'content/about.png');
    this.load.image('phaserLogo', 'content/phaserLogo.png');

    this.load.image('github', 'content/github.png');
    this.load.image('githubHover', 'content/githubHover.png');
    this.load.image('twitter', 'content/twitter.png');
    this.load.image('twitterHover', 'content/twitterHover.png');
    this.load.image('linkedin', 'content/linkedin.png');
    this.load.image('linkedinHover', 'content/linkedinHover.png');
  }

  create() {
    this.gameTitle = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.08,
      'aboutTitle',
    );

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver', { volume: 0.1 }),
      btnDown: this.sound.add('sndBtnDown', { volume: 0.1 }),
    };

    this.song = this.sound.add('victoryTheme', { volume: 0.3 });
    this.song.play();

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.3,
      this.game.config.height * 0.92,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();
    this.createButton(this.btnPlay, 'sprBtnPlay', 'sprBtnPlayHover', 'sprBtnPlayDown');
    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.song.stop();
      this.scene.start('SceneMain');
    }, this);

    this.btnRecord = this.add.sprite(
      this.game.config.width * 0.7,
      this.game.config.height * 0.92,
      'sprBtnRecord',
    );

    this.btnRecord.setInteractive();
    this.createButton(this.btnRecord, 'sprBtnRecord', 'sprBtnRecordHover', 'sprBtnRecordDown');
    this.btnRecord.on('pointerup', () => {
      this.btnRecord.setTexture('sprBtnRecord');
      this.song.stop();
      this.scene.start('SceneLeaderBoard');
    }, this);

    this.message = [];
    this.message.push('This game was produced by Raphael Cordeiro as prerequisite to complete JavaScript program in Microverse.');
    this.message.push('To know more about the game and some of its mechanics consider visit its repository: https://github.com/phalado/JS-Capstone/');
    this.message.push('This game was produced using Phaser 3 framwork. You can visit theyr website clicking on the logo bellow.');
    this.message.push('Feel free to visit my social medias and send me a hello clicking on the icons bellow.');
    this.message.push('© 2020 Star Wars & ™ Lucasfilm Ltd. All rights reserved.');

    this.textConfig = {
      color: '#d0c600',
      fontFamily: 'sans-serif',
      fontSize: '1.3vw',
      lineHeight: 1.3,
      align: 'justify',
      wordWrap: {
        width: this.game.config.width * 0.8,
        useAdvancedWrap: true,
      },
    };

    this.add.text(
      this.game.config.width * 0.1,
      this.game.config.height * 0.15,
      this.message[0],
      this.textConfig,
    );

    this.add.text(
      this.game.config.width * 0.1,
      this.game.config.height * 0.27,
      this.message[1],
      this.textConfig,
    );

    this.add.text(
      this.game.config.width * 0.1,
      this.game.config.height * 0.4,
      this.message[2],
      this.textConfig,
    );

    this.phaserLogo = this.add.image(
      this.game.config.width * 0.5,
      this.game.config.height * 0.52,
      'phaserLogo',
    );

    this.phaserLogo.setInteractive();
    this.phaserLogo.on('pointerup', () => {
      window.open('https://phaser.io/', '_blank');
    }, this);
    this.phaserLogo.on('pointerover', () => {
      this.phaserLogo.setScale(1.1);
    }, this);
    this.phaserLogo.on('pointerout', () => {
      this.phaserLogo.setScale(0.91);
    });

    this.add.text(
      this.game.config.width * 0.1,
      this.game.config.height * 0.57,
      this.message[3],
      this.textConfig,
    );

    this.githubIcon = this.createIcon(
      this.githubIcon,
      this.game.config.width * 0.5,
      this.game.config.height * 0.71,
      'https://github.com/phalado',
      'github',
      'githubHover',
    );

    this.twitterIcon = this.createIcon(
      this.twitterIcon,
      this.game.config.width * 0.25,
      this.game.config.height * 0.71,
      'https://twitter.com/Phalado',
      'twitter',
      'twitterHover',
    );

    this.linkedinIcon = this.createIcon(
      this.linkedinIcon,
      this.game.config.width * 0.75,
      this.game.config.height * 0.71,
      'https://www.linkedin.com/in/raphael-cordeiro/',
      'linkedin',
      'linkedinHover',
    );

    this.add.text(
      this.game.config.width * 0.1,
      this.game.config.height * 0.8,
      this.message[4],
      this.textConfig,
    );

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

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

    if (this.keySpace.isDown) {
      this.song.stop();
      this.scene.start('SceneMain');
    }
  }

  createButton(btn, spr, sprHover, sprDown) {
    btn.on('pointerover', () => {
      btn.setTexture(sprHover);
      this.sfx.btnOver.play();
    }, this);

    btn.on('pointerout', () => {
      btn.setTexture(spr);
    });

    btn.on('pointerdown', () => {
      btn.setTexture(sprDown);
      this.sfx.btnDown.play();
    }, this);
  }

  createIcon(icon, x, y, link, spr, sprHover) {
    icon = this.add.image(x, y, spr);
    icon.setInteractive();

    icon.on('pointerup', () => {
      window.open(link, '_blank');
    }, this);

    icon.on('pointerover', () => {
      icon.setScale(1.1);
      icon.setTexture(sprHover);
    }, this);

    icon.on('pointerout', () => {
      icon.setTexture(spr);
      icon.setScale(0.91);
    });

    return icon;
  }
}

export default SceneAbout;
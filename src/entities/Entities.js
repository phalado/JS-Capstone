import Phaser from 'phaser';

class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData('type', type);
    this.setData('isDead', false);
  }

  explode(canDestroy) {
    if (!this.getData('isDead')) {
      this.setTexture('sprExplosion');
      this.setData('score', 0);
      this.play('sprExplosion');

      const sound = Phaser.Math.Between(0, this.scene.sfx.explosions.length - 1);
      this.scene.sfx.explosions[sound].play();

      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }

      this.setAngle(0);
      this.body.setVelocity(0, 0);

      this.on('animationcomplete', () => {
        if (canDestroy) {
          this.destroy();
        } else {
          this.setVisible(false);
        }
      }, this);

      this.setData('isDead', true);
    }
  }
}

export default Entity;

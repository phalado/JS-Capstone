import Entity from './Entities';
import EnemyLaser from './entityEnemyLaser';
import Phaser from './phaser';

class TieFighter extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'tieFighter', 'TieFighter');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 1500,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
    this.play('tieFighter');
    this.setData('health', 2);
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }

  updateHealth() {
    if (this.getData('health') > 0) {
      this.scene.sfx.explosions[1].play();
      this.setData('health', this.getData('health') - 1);
      this.body.velocity.y = Phaser.Math.Between(50, 100);
      return false;
    }

    return true;
  }
}

export default TieFighter;
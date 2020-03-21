import Phaser from 'phaser';
import Entity from './Entities';
import EnemyLaser from './entityEnemyLaser';

class TieAdvanced extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'tieAdvanced', 'TieAdvanced');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 1500,
      callback() {
        const laserL = new EnemyLaser(
          this.scene,
          this.x - 20,
          this.y,
        );
        laserL.setScale(this.scaleX);
        this.scene.enemyLasers.add(laserL);
        const laserR = new EnemyLaser(
          this.scene,
          this.x + 20,
          this.y,
        );
        laserR.setScale(this.scaleX);
        this.scene.enemyLasers.add(laserR);
      },
      callbackScope: this,
      loop: true,
    });
    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      DISTANCE: 'DISTANCE',
    };
    this.play('tieAdvanced');
    this.setData('health', 20);
    this.setData('score', 5000);
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

  update() {
    if (Phaser.Math.Distance.Between(
      this.x,
      this.y,
      this.scene.player.x,
      this.scene.player.y,
    ) < 320) {
      this.state = this.states.DISTANCE;
    }

    if (this.state === this.states.DISTANCE) {
      const dy = this.scene.player.y - this.y;
      this.body.velocity.x = Phaser.Math.Between(-50, 50);
      this.body.velocity.y = dy - 200;
    }
  }
}

export default TieAdvanced;
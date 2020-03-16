import Entity from './Entities';
import Phaser from './phaser';

class ImperialShutle extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'imperialShutle', 'ImperialShutle');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play('imperialShutle');
    this.setData('health', 3);
  }

  updateHealth() {
    console.log(this.getData('health'));
    if (this.getData('health') > 0) {
      this.scene.sfx.useForce.play();
      this.setData('health', this.getData('health') - 1);
      this.body.velocity.y = Phaser.Math.Between(50, 100);
      return false;
    }

    return true;
  }
}

export default ImperialShutle;
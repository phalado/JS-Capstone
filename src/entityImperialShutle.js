import Entity from './Entities';
import Phaser from './phaser';

class ImperialShutle extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'imperialShutle', 'ImperialShutle');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.play('imperialShutle');
  }
}

export default ImperialShutle;
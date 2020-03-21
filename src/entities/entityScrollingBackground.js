import Phaser from 'phaser';

class ScrollingBackground {
  constructor(scene, key, velocityY) {
    this.scene = scene;
    this.key = key;
    this.velocityY = velocityY;

    this.layers = this.scene.add.group();
    this.createLayers();
  }

  createLayers() {
    for (let i = 0; i < 2; i += 1) {
      const layer = this.scene.add.sprite(0, 0, this.key);
      layer.y = (layer.displayHeight * i);

      const flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
      const flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;

      layer.setScale(flipX * 2, flipY * 2);
      layer.setDepth(-5 - (i - 1));
      this.scene.physics.world.enableBody(layer, 0);
      layer.body.velocity.y = this.velocityY;

      this.layers.add(layer);
    }
  }

  update() {
    if (this.layers.getChildren()[0].y > 0) {
      for (let i = 0; i < this.layers.getChildren().length; i += 1) {
        const layer = this.layers.getChildren()[i];
        layer.y = (-layer.displayHeight) + (layer.displayHeight * i);
      }
    }
  }
}

export default ScrollingBackground;
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene){
        super(scene, 83, 68, 'prota');

        scene.add.existing (this);
        scene.physics.add.existing(this); 

        this.body.setCollideWorldBounds(true);
        this.playerAnims();
    }
}
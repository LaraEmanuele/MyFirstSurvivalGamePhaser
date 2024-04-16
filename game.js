const config = {
    type: Phaser.AUTO,
    width: 1910,
    height: 927,
    scene: [scene1, scene2],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
    
};

const game = new Phaser.Game(config);
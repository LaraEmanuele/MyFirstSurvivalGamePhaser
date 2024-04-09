const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    scene: Exemplo,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
    
};

const game = new Phaser.Game(config);
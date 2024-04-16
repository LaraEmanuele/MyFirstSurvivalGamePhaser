class scene1 extends Phaser.Scene {
    constructor() {
        super('boot_game');
    }

    preload() {
        this.load.image('background', 'assets/grass2.png');
        this.load.image('status', 'assets/barra_saude.png');
        this.load.image('arvore1', 'assets/Tree1.png');

        this.load.spritesheet('player', 'assets/sprite_sheet/prota.png', {
            frameWidth: 83,
            frameHeight: 68,
        });

        this.load.spritesheet('fonte', 'assets/sprite_sheet/prota.png', {
            frameWidth: 16,
            frameHeight: 16,
        });
    }

    create() {
        this.scene.start('play_game');
    }
}

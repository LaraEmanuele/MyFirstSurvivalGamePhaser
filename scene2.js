class scene2 extends Phaser.Scene {
    constructor() {
        super('play_game');
    }

    create() {
        this.background = this.add.tileSprite(
            0,
            0,
            config.width,
            config.height,
            'background',
        );
        this.background.setOrigin(0, 0);

        this.arvore1 = this.add.image(
            config.width / 2,
            config.height / 2,
            'arvore1',
        );
        this.arvore1.setOrigin(0, 0);
        this.arvore1.setScale(3);

        this.status = this.add.image(0, 760, 'status');
        this.status.setOrigin(0, 0);
        this.status.setCrop(0, 0, 240, 80);
        this.status.setScale(1.5);

        this.fonte = this.add.sprite(300, 500, 'fonte');
        this.fonte.setScale(3);
        this.anims.create({
            key: 'fonte_anim',
            frames: this.anims.generateFrameNumbers('fonte', {
                start: 0,
                end: 3,
            }),
            frameRate: 20,
            repeat: -1,
        });
        this.fonte.play('fonte_anim', true);
    }

    update() {}
}

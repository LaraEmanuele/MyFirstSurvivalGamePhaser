class Exemplo extends Phaser.Scene {
    constructor(){
        super('exemplo')
    }

    preload ()
        {
            this.load.image("background", "assets/Grass.png");
        }

        create ()
        {
            this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        }

}
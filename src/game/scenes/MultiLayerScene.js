import { Scene } from 'phaser'


export default class MultiLayerScene extends Scene {
    constructor() {
        super({ key: 'MultiLayerScene' })
    }


    preload() {

    }

    create() {
        this.map = this.add.tilemap("World");
        var tileset = this.map.addTilesetImage("tiles", "tiles");
        this.backgroundLayer = this.map.createStaticLayer("World", tileset);
    }

    update() { }

    // preload() {

    //     debugger
    //     this.load.tilemapTiledJSON('map', '../assets/tilemaps/maps/multi-layer-multi-tileset.json', null);

    //     this.load.image('platforms', '../assets/tilemaps/tiles/kenny_platformer_64x64.png');
    //     this.load.image('ground', '../assets/tilemaps/tiles/kenny_ground_64x64.png');
    //     this.load.image('items', '../assets/tilemaps/tiles/kenny_items_64x64.png');

    //     this.load.image('arrow', '../assets/sprites/arrow.png');

    // }

    // create() {

    //     // this.physics.startSystem(Phaser.Physics.ARCADE);

    //     // this. .backgroundColor = '#01555f';

    //     this.map = this.add.tilemap('map');

    //     //  Tilesets must always be added first
    //     this.map.addTilesetImage('kenny_platformer_64x64', 'platforms');
    //     this.map.addTilesetImage('kenny_ground_64x64', 'ground');
    //     this.map.addTilesetImage('kenny_items_64x64', 'items');

    //     //  Then create the layers
    //     var layer1 = this.map.createStaticLayer('Layer 1', 'Tile');
    //     var layer2 = this.map.createStaticLayer('Layer 2', 'Tile');
    //     var layer3 = this.map.createStaticLayer('Layer 3', 'Tile');

    //     // layer1.resizeWorld();

    //     this.sprite = this.add.sprite(260, 100, 'arrow');
    //     // this.sprite. anchor.set(0.5);
    //     // this.physics.enable(this.sprite);

    //     // this.sprite.body.maxAngular = 500;
    //     // this.sprite.body.angularDrag = 50;

    //     this.cameras.main.startFollow(this.sprite);

    //     this.cursors = this.input.keyboard.createCursorKeys();

    // }

    // update() {

    //     // this.physics.arcade.collide(this.sprite, layer);

    //     this.sprite.body.velocity.x = 0;
    //     this.sprite.body.velocity.y = 0;
    //     // this.sprite.body.angularVelocity = 0;

    //     if (this.cursors.left.isDown) {
    //         // this.sprite.body.angularVelocity = -200;
    //     }
    //     else if (this.cursors.right.isDown) {
    //         // this.sprite.body.angularVelocity = 200;
    //     }

    //     if (this.cursors.up.isDown) {
    //         // this.physics.arcade.velocityFromAngle(this.sprite.angle, 400, this.sprite.body.velocity);
    //     }

    // }
}
import { Scene } from 'phaser'
import forest from '@/game/assets/tilemaps/maps/forest.json'
import forestImage from '@/game/assets/tilemaps/sets/forest_tileset-32x32.png'


export default class MapScene extends Scene {
    constructor() {
        super({ key: 'MapScene' })
    }

    preload() {


    }



    create() {
        this.map = this.make.tilemap({ key: 'forestmap' })
        this.tileset = this.map.addTilesetImage('forest_tileset-32x32', 'tiles', 32, 32, 1, 2)

        this.layer1 = this.map.createStaticLayer('Grass', this.tileset)


        // this.map = this.add.tilemap('forest');

        // this.map.addTilesetImage('Forest', 'tiles');

        this.currentTile = this.map.getTileAt(2, 3);

        this.layer = this.map.createStaticLayer('Ground', 'forest');

        this.marker = this.add.graphics();
        this.marker.lineStyle(2, 0x000000, 1);
        this.marker.fillRect(0, 0, 32, 32);

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        let tile = this.layer1.getTileAt(this.input.activePointer.worldX, this.input.activePointer.worldY)
        this.marker.x = tile.x * 32;
        this.marker.y = tile.y * 32;

        if (this.input.mousePointer.isDown) {
            if (this.input.keyboard.checkDown(this.cursors.shift)) {
                this.currentTile = this.map.getTileAt(this.marker.x, this.marker.y);
            }
            else {
                if (this.map.getTileAt(this.marker.x, this.marker.y).index != this.currentTile.index) {
                    this.map.putTileAt(this.currentTile, this.marker.x, this.marker.y);
                }
            }
        }

        if (this.cursors.left.isDown) {
            this.cameras.main.x -= 4;
        }
        else if (this.cursors.right.isDown) {
            this.cameras.main.x += 4;
        }

        if (this.cursors.up.isDown) {
            this.cameras.main.y -= 4;
        }
        else if (this.cursors.down.isDown) {
            this.cameras.main.y += 4;
        }

    }

    render() {

        this.debug.text('Left-click to paint. Shift + Left-click to select tile. Arrows to scroll.', 32, 32, '#efefef');

    }
}
import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'
import TestScene from './scenes/TestScene';


function launch(containerId, json) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: containerId,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [BootScene, PlayScene, TestScene]
    }).scene.start('BootScene', json)
}

export default launch
export { launch }
const config = {
    title: 'Configuración base Phaser',
    url: 'https://urldeejemplo.com',
    version: '0.0.1',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'contenedor',
    scene: {}
};

const game = new Phaser.Game(config);
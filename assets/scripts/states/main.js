class Main {
  constructor (game) {
    this.game = game
    this.player = null
    this.background = null
  }
  preload() {
    game.load.spritesheet('robot-unicorn', 'assets/sprites/robot-unicorn.png', 206, 110)
    game.load.spritesheet('platforms', 'assets/sprites/tiles.png', 16, 16)
    game.load.image('background', 'assets/sprites/background.png')
  }
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.game.time.desiredFps = 60

    this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background')

    //this.game.physics.arcade.gravity.y = 250

    this.player = this.game.add.sprite(206, 110, 'robot-unicorn')
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE)

    this.player.body.bounce.y = 0
    this.player.body.collideWorldBounds = true
    this.player.body.setSize(206, 110, 5, 16)

    var runningIndices = []
    for (var i = 29; i >= 0; i--)
      runningIndices.push(i)
    
    this.player.animations.add('running', runningIndices, 30, true)

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    this.player.animations.play('running')
  }
  update() {}
}
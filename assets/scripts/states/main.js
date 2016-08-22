class Main {
  constructor (game) {
    this.game = game
    this.player = null
    this.background = null
    this.platforms = null
  }
  
  configureGame() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.time.desiredFps = 35
    this.background = this.game.add.tileSprite(0, 0, 1024, 640, 'background')

    this.game.physics.arcade.gravity.y = 250

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }
  
  createStartingPlatforms() {
    this.platforms = this.game.add.group(this.game, null, 'platforms')
    this.platforms.add(new Platform(game, {x: 0, y: 150}, {width: 90, height: 3}))
  }
  
  
  preload() {
    this.game.load.spritesheet('robot-unicorn', 'assets/sprites/robot-unicorn.png', 206, 110)
    this.game.load.spritesheet('platforms', 'assets/sprites/tiles.png', 16, 16, 9, 0, 1)
    this.game.load.image('background', 'assets/sprites/background.png')
  }
  create() {
    this.configureGame()
    this.createStartingPlatforms()
    
    this.player = new Player(game)
    this.game.camera.follow(this.player.sprite)
  }
  update() {
    this.game.physics.arcade.collide(this.player.sprite, this.platforms.getChildAt(0))
  }
  render() {
    this.game.debug.cameraInfo(this.game.camera, 32, 32)
  }
}
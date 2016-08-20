class Main {
  constructor (game) {
    this.game = game
    this.player = null
    this.background = null
    this.platforms = []
  }
  
  configureGame() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.time.desiredFps = 35
    this.background = this.game.add.tileSprite(0, 0, 1024, 640, 'background')

    //this.game.physics.arcade.gravity.y = 250

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }
  
  createStartingPlatforms() {
    this.platforms.push(new Platform(game, {x: -1, y: 30 }, {width: 60, height: 1}))
  }
  
  
  preload() {
    this.game.load.spritesheet('robot-unicorn', 'assets/sprites/robot-unicorn.png', 206, 110)
    this.game.load.spritesheet('platforms', 'assets/sprites/tiles.png', 16, 16)
    this.game.load.image('background', 'assets/sprites/background.png')
  }
  create() {
    this.configureGame()
    this.createStartingPlatforms()
    
    this.player = new Player(game)
  }
  update() {
    
  }
}
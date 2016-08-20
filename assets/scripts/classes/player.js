class Player {
  constructor (game) {
    this.game = game
    
    this.sprite = this.game.add.sprite(206, 110, 'robot-unicorn')
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE)

    this.sprite.body.bounce.y = 0
    this.sprite.body.collideWorldBounds = true
    this.sprite.body.setSize(206, 110, 5, 16)

    var runningIndices = []
    for (var i = 29; i >= 0; i--)
      runningIndices.push(i)
    
    this.sprite.animations.add('running', runningIndices, 30, true)
    this.sprite.animations.play('running')
  }
}
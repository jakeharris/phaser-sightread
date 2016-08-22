class Player {
  constructor (game) {
    this.game = game
    
    this.sprite = this.game.add.sprite(206, 0, 'robot-unicorn')
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE)

    this.sprite.body.bounce.y = 0
    this.sprite.body.checkCollision.down = true
    this.sprite.body.setSize(206, 90)
    this.sprite.body.gravityAllowed = true
    this.sprite.body.velocity.x = 240

    var runningIndices = []
    for (var i = 29; i >= 0; i--)
      runningIndices.push(i)
    
    this.sprite.animations.add('running', runningIndices, 30, true)
    this.sprite.animations.play('running')
  }
}
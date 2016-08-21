// Basic rectangular platforms.
class Platform {
  // x and y in unit blocks of 16x16px
  constructor (game, location, dimensions) {
    
    this.x = location.x
    this.y = location.y
    this.width = dimensions.width
    this.height = dimensions.height
    
    this.game = game
    
    this.sprites = []
    
    for(var i = 0; i < this.width * this.height; i++)
      if(i % this.width === 0)
        if(Math.floor(i / this.width) === 0)
          this.createBlock(i, Platform.Frames.TopLeft)
        else if (Math.floor(i / this.width) === this.height - 1)
          this.createBlock(i, Platform.Frames.BottomLeft)
        else
          this.createBlock(i, Platform.Frames.CenterLeft)
      else if(i % this.width === this.width - 1)
        if(Math.floor(i / this.width) === 0)
          this.createBlock(i, Platform.Frames.TopRight)
        else if (Math.floor(i / this.width) === this.height - 1)
          this.createBlock(i, Platform.Frames.BottomRight)
        else
          this.createBlock(i, Platform.Frames.CenterRight)
      else if (Math.floor(i / this.width) === 0)
        this.createBlock(i, Platform.Frames.TopCenter)
      else if (Math.floor(i / this.width) === this.height - 1)
        this.createBlock(i, Platform.Frames.BottomCenter)
      else
        this.createBlock(i, Platform.Frames.Center)
  }
  
  static get DEFAULT_BLOCK_SIZE () {
    return 16
  }
  static get Frames () {
    return Object.freeze({
      TopLeft: 3,
      TopCenter: 4,
      TopRight: 5,
      CenterLeft: 3,
      Center: 4,
      CenterRight: 5,
      BottomLeft: 6,
      BottomCenter: 7,
      BottomRight: 8
    })
  }
  
  createBlock(i, which) {
    this.sprites.push(
      this.game.add.sprite(
        this.getBlockStartingX(i), 
        this.getBlockStartingY(i), 
        'platforms',
        which
      )
    )
  }
  getBlockStartingX (i) {
    return this.x + ((i % this.width) * Platform.DEFAULT_BLOCK_SIZE)
  }
  getBlockStartingY (i) {
    return this.y + (Math.floor(i / this.width) * Platform.DEFAULT_BLOCK_SIZE)
  }
}

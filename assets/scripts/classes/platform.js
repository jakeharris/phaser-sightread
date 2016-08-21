// Basic rectangular platforms.
class Platform extends Phaser.Group {
  // x and y in unit blocks of 16x16px
  constructor (game, location, dimensions) {
    
    super(game)
    
    this.enableBody = true
    
    this.x = location.x
    this.y = location.y
    this.dimensions = dimensions
    
    // for some reason, doing
    // this.width = dimensions.width
    // would never set width to anything but 0.
    // very odd behavior. I blame phaser. 
    
    for(var i = 0; i < this.dimensions.width * this.dimensions.height; i++)
      if(i % this.dimensions.width === 0)
        if(Math.floor(i / this.dimensions.width) === 0)
          this.createBlock(i, Platform.Frames.TopLeft)
        else if (Math.floor(i / this.dimensions.width) === this.dimensions.height - 1)
          this.createBlock(i, Platform.Frames.BottomLeft)
        else
          this.createBlock(i, Platform.Frames.CenterLeft)
      else if(i % this.dimensions.width === this.dimensions.width - 1)
        if(Math.floor(i / this.dimensions.width) === 0)
          this.createBlock(i, Platform.Frames.TopRight)
        else if (Math.floor(i / this.dimensions.width) === this.dimensions.height - 1)
          this.createBlock(i, Platform.Frames.BottomRight)
        else
          this.createBlock(i, Platform.Frames.CenterRight)
      else if (Math.floor(i / this.dimensions.width) === 0)
        this.createBlock(i, Platform.Frames.TopCenter)
      else if (Math.floor(i / this.dimensions.width) === this.dimensions.height - 1)
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
    this.create(
      this.getBlockStartingX(i), 
      this.getBlockStartingY(i), 
      'platforms',
      which
    )
  }
  getBlockStartingX (i) {
    return this.x + ((i % this.dimensions.width) * Platform.DEFAULT_BLOCK_SIZE)
  }
  getBlockStartingY (i) {
    return this.y + (Math.floor(i / this.dimensions.width) * Platform.DEFAULT_BLOCK_SIZE)
  }
}

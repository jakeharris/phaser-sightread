// Basic rectangular platforms.
class Platform {
  // x and y in unit blocks of 16x16px
  constructor (game, location, dimensions) {
    var DEFAULT_BLOCK_SIZE = 16,
        TOP_LEFT_CORNER_FRAME_INDEX = 50,
        TOP_CENTER_FRAME_INDEX = 51,
        TOP_RIGHT_CORNER_FRAME_INDEX = 52,
        LEFT_CENTER_FRAME_INDEX = 65,
        CENTER_FRAME_INDEX = 66,
        RIGHT_CENTER_FRAME_INDEX = 67,
        BOTTOM_LEFT_FRAME_INDEX = 70,
        BOTTOM_CENTER_FRAME_INDEX = 71,
        BOTTOM_RIGHT_FRAME_INDEX = 72
        
    
    this.x = location.x
    this.y = location.y
    this.width = dimensions.width
    this.height = dimensions.height
    
    this.game = game
    
    this.sprites = []
    
    
    // TODO: fix the % on heights. that's not how anything works lmao
    for(var i = 0; i < this.width * this.height, i++)
      if(i % this.width === 0)
        if(i % this.height === 0)
          this.sprites.push(this.game.add.sprite(this.x + (i %  * DEFAULT_BLOCK_SIZE), this.y + ())
        else if (i % this.height === this.height - 1)
          this.sprites.push('bottom-left')
        else
          this.sprites.push('left')
      else if(i % this.width === this.width - 1)
        if(i % this.height === 0)
          this.sprites.push('top-right')
        else if (i % this.height === this.height - 1)
          this.sprites.push('bottom-right')
        else
          this.sprites.push('right')
      else if (i % this.height === 0)
        this.sprites.push('top')
      else if (i % this.height === this.height - 1)
        this.sprites.push('bottom')
      else
        this.sprites.push('center')
  }
}

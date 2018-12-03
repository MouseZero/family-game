import React from 'react'

function Block({block, yIndex, xIndex, blockSize}) {
  const style = {
    width: blockSize,
    height: blockSize
  }
  return (
    <img style={style} src="https://www.wurmpedia.com/images/thumb/c/c5/Grass.png/180px-Grass.png"/>
  )
}

export default Block

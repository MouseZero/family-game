import React from 'react'

const style = {
  position: 'absolute'
}

function Player ({player, blockSize}) {
  const x = (player.x * blockSize) + 'px'
  const y = (player.y * blockSize) + 'px'
  const styleAdditions = {
    left: x,
    top: y,
    width: blockSize,
    height: blockSize
  }
  const allStyles = {...style, ...styleAdditions}
  return (
    <div>
      <img style={allStyles} src="./assets/flower.png"/>
    </div>
  )
}

export default Player

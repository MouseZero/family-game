import React from 'react'

const style = {
  position: 'absolute'
}

function Player ({player}) {
  const x = (150 + (player.x * 200)) + 'px'
  const y = (50 + (player.y * 200)) + 'px'
  const styleAdditions = {
    left: x,
    top: y
  }
  const allStyles = {...style, ...styleAdditions}
  return (
    <div>
      <img style={allStyles} src="./assets/flower.png"/>
    </div>
  )
}

export default Player

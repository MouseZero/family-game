import React from 'react'

function Map ({map, player}) {
  return (
    <div>
      {map.map((row, index) => {
        const newRow = row.map((block, rowIndex) => {
          if (player.x === rowIndex && player.y === index) {
            return (
              <div
                key={'block'+index+'-'+rowIndex+'-'+block}
                className="player"
              >{'00'}</div>
            )
          } else {
            return (
              <div
                key={'block'+index+'-'+rowIndex+'-'+block}
                className="block"
              >{block}</div>
            )
          }
        })
        return (
          <div key={index} className="rowOfBlocks">
            {newRow}
          </div>
        )
      })}
    </div>
  )
}

export default Map

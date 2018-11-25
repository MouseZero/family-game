import React from 'react'

function Map ({map, player}) {
  console.log(map)
  return (
    <div>
      {map.map((row, index) => {
        const newRow = row.map((block, rowIndex) => {
          if (player.x === rowIndex && player.y === index) block = 22
          return (
            <div
              key={'block'+index+'-'+rowIndex+'-'+block}
              className="block"
            >{block}</div>
          )
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

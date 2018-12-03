import React from 'react'
import Block from './Block'

function Map ({map, player}) {
  return (
    <div>
      {map.map((row, yIndex) => {
        const newRow = row.map((block, xIndex) => {
          return (
            <Block
              key={'block'+yIndex+'-'+xIndex+'-'+block}
              block={block}
              player={player}
              yIndex={yIndex}
              xIndex={xIndex}
            />
          )
        })
        return (
          <div key={'row'+yIndex} className="rowOfBlocks">
            {newRow}
          </div>
        )
      })}
    </div>
  )
}

export default Map

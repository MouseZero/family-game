import React from 'react'
import Block from './Block'

function Map ({map, blockSize}) {
  return (
    <div>
      {map.map((row, yIndex) => {
        const newRow = row.map((block, xIndex) => {
          return (
            <Block
              key={'block'+yIndex+'-'+xIndex+'-'+block}
              block={block}
              yIndex={yIndex}
              xIndex={xIndex}
              blockSize={blockSize}
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

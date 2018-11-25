const {createStore} = require('redux')

const map = {
  north: [0, -1],
  east: [1, 0],
  south: [0, 1],
  west: [-1, 0]
}
const move = (player, dir) => {
  return {
    ...player,
    x: player.x + map[dir][0],
    y: player.y + map[dir][1]
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'PLAYER_MOVE':
      return {
        ...state,
        player: move(state.player, action.direction)
      }
    default:
      return state
  }
}

const store = createStore(reducer, {
  map: [
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,11,11,11,11,11]
  ],
  player: {
    x: 0,
    y: 0
  }
})

export default store

const renderWorld = (state) => {
  const {map, player} = state
  for(let y=0; y<map.length; y++) {
    const row = []
    for(let x=0; x < map[y].length; x++) {
      if (x === player.x && y === player.y) {
        row.push(22)
      } else {
        row.push(map[y][x])
      }
    }
    console.log(row)
  }
  console.log('-------------------------------')
}

store.subscribe(() => renderWorld(store.getState()))


// store.dispatch({
//   type: 'PLAYER_MOVE',
//   direction: 'south'
// })

// store.dispatch({
//   type: 'PLAYER_MOVE',
//   direction: 'south'
// })

// store.dispatch({
//   type: 'PLAYER_MOVE',
//   direction: 'east'
// })

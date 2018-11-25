import React from 'react'

class Game extends React.Component {
  componentDidMount() {
    addEventListener('keydown', this.keyListener, true)
  }

  componentWillUnmount() {
    removeEventListener('keydown', this.keyListener, true)
  }

  keyListener(event) {
    const code = event.keyCode
    if ([38, 87].includes(code)) {
      // Up pressed
      console.log('going up')
    } else if ([40, 83].includes(code)) {
      // Down pressed
      console.log('going down')
    } else if ([68, 39].includes(code)) {
      // Right pressed
      console.log('going right')
    } else if ([65, 37].includes(code)) {
      // Left pressed
      console.log('going left')
    }
  }

  render() {
    return (
      <div>Game</div>
    )
  }
}

export default Game

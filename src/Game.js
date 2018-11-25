import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import Map from './components/Map'

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
    const {map, player} = this.props
    return (
      <div>
        <div>
          <Map map={map} player={player}/>
        </div>
      </div>
    )
  }
}
Game.propTypes = {
  map: PropTypes.array,
  player: PropTypes.object
}

const mapStateToProps = (state) => ({
  map: state.map,
  player: state.player
})
export default connect(mapStateToProps)(Game)

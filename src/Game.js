import React from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import Map from './components/Map'

class Game extends React.Component {
  componentDidMount() {
    addEventListener('keydown', this.keyListener(this.props.dispatch), true)
  }

  componentWillUnmount() {
    removeEventListener('keydown', this.keyListener, true)
  }

  keyListener(dispatch) {
    return (event) => {
      const code = event.keyCode
      if ([38, 87].includes(code)) {
        // Up Pressed
        dispatch({ type: 'PLAYER_MOVE', direction: 'north'})
      } else if ([40, 83].includes(code)) {
        // Down pressed
        dispatch({ type: 'PLAYER_MOVE', direction: 'south'})
      } else if ([68, 39].includes(code)) {
        // Right pressed
        dispatch({ type: 'PLAYER_MOVE', direction: 'east'})
      } else if ([65, 37].includes(code)) {
        // Left pressed
        dispatch({ type: 'PLAYER_MOVE', direction: 'west'})
      }
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
  player: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => ({
  map: state.map,
  player: state.player
})
export default connect(mapStateToProps, null)(Game)

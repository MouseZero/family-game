import React from 'react'
import ReactDom from 'react-dom'
import Game from './Game'
import Store from './state/store'
import { Provider } from "react-redux";

ReactDom.render((
  <Provider store={Store}>
    <Game/>
  </Provider>
), document.getElementById('app'))

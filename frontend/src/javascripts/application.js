import React from 'react'
import { render } from 'react-dom';

import Heros from './heros.js'

class Simulator extends React.Component {
  render() {
    return (
      <div className="SimulatorComponent">
        <Heros />
      </div>
    )
  }
}

render(
  <Simulator url='/' />,
  document.getElementById('content')
)

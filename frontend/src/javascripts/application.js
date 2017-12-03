import React from 'react'
import { render } from 'react-dom';

class Simulator extends React.Component {
  render() {
    return (
      <div className="SimulatorComponent">
        test
      </div>
    )
  }
}

render(
  <Simulator url='/' />,
  document.getElementById('content')
)

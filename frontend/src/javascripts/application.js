import React from 'react'
import { render } from 'react-dom'

import Results from './results/results.js'
import HeroAbilitySetting from './hero_ability/hero_ability_setting.js'

class Simulator extends React.Component {
  render() {
    return (
      <div className="SimulatorComponent">
        <Results />
        <HeroAbilitySetting />
      </div>
    )
  }
}

render(
  <Simulator url='/' />,
  document.getElementById('content')
)

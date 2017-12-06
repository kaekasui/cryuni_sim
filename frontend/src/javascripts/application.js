import React from 'react'
import { render } from 'react-dom'

import Results from './results/results.js'
import HeroAbilitySetting from './hero_ability/hero_ability_setting.js'

class Simulator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: {
        name: ''
      }
    }
    this.loadHero = this.loadHero.bind(this)
  }

  loadHero(hero) {
    this.setState({hero: hero})
  }

  render() {
    return (
      <div className="SimulatorComponent">
        <div className='col-md-6'>
          <HeroAbilitySetting handleLoadHero={this.loadHero} />
        </div>
        <div className='col-md-6'>
          <Results hero={this.state.hero} />
        </div>
      </div>
    )
  }
}

render(
  <Simulator url='/' />,
  document.getElementById('content')
)

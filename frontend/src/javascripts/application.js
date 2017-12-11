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
      },
      heroAbility: []
    }
    this.setHero = this.setHero.bind(this)
    this.setHeroAbility = this.setHeroAbility.bind(this)
  }

  setHero(hero) {
    this.setState({hero: hero})
    console.log('set hero')
  }

  setHeroAbility(abilities) {
    this.setState({heroAbility: abilities})
    console.log('set hero abi')
  }

  render() {
    return (
      <div className="SimulatorComponent">
        <div className='col-md-6'>
          <HeroAbilitySetting handleSelectHeroAbility={this.setHeroAbility} selectHero={this.setHero} />
        </div>
        <div className='col-md-6'>
          <Results hero={this.state.hero} heroAbility={this.state.heroAbility} />
        </div>
      </div>
    )
  }
}

render(
  <Simulator url='/' />,
  document.getElementById('content')
)

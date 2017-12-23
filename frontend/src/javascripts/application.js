import React from 'react'
import { render } from 'react-dom'

import Results from './results/results'
import VipAbilitySetting from './vip_ability/vip_ability_setting'
import HeroAbilitySetting from './hero_ability/hero_ability_setting'
import CoreAbilitySetting from './core_ability/core_ability_setting'

class Simulator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: {
        name: ''
      },
      heroAbility: {attached_hero_abilities: []},
      vipAbility: {attached_vip_abilities: []},
      coreHeros: []
    }
    this.setHero = this.setHero.bind(this)
    this.setHeroAbility = this.setHeroAbility.bind(this)
    this.setVipAbility = this.setVipAbility.bind(this)
    this.setCoreAbilities = this.setCoreAbilities.bind(this)
  }

  setHero(hero) {
    this.setState({hero: hero})
  }

  setHeroAbility(abilities) {
    this.setState({heroAbility: abilities})
  }

  setVipAbility(abilities) {
    this.setState({vipAbility: abilities})
  }

  setCoreAbilities(heros) {
    this.setState({coreHeros: heros})
  }

  render() {
    return (
      <div className="SimulatorComponent">
        <div className='col-md-6'>
          <VipAbilitySetting handleSelectVipAbility={this.setVipAbility} />
          <HeroAbilitySetting handleSelectHeroAbility={this.setHeroAbility} selectHero={this.setHero} />
          <CoreAbilitySetting handleSetCoreAbilities={this.setCoreAbilities} />
        </div>
        <div className='col-md-6'>
          <Results coreHeros={this.state.coreHeros} hero={this.state.hero} heroAbility={this.state.heroAbility} vipAbility={this.state.vipAbility} />
        </div>
      </div>
    )
  }
}

render(
  <Simulator url='/' />,
  document.getElementById('content')
)

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
    this.setCoreHeros = this.setCoreHeros.bind(this)
    this.removeCoreHero = this.removeCoreHero.bind(this)
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

  removeCoreHero(hero) {
    let coreHeros = this.state.coreHeros
    for (let index in coreHeros) {
      if (coreHeros[index].id == hero.id) {
        coreHeros.splice(index, 1)
      }
    }
    this.setState({coreHeros: coreHeros})
  }

  setCoreHeros(hero, coreAbilities) {
    let coreHeros = this.state.coreHeros
    let coreHero = {}
    hero['attached_core_abilities'] = coreAbilities
    coreHero = hero

    let existCoreHero = false
    for (let index in coreHeros) {
      if (coreHeros[index].id == coreHero.id) {
        existCoreHero = true
        coreHeros[index] = coreHero
      }
    }
    if (existCoreHero == false) {
      coreHeros.push(coreHero)
    }
    this.setState({coreHeros: coreHeros})
  }

  render() {
    return (
      <div className="SimulatorComponent">
        <div className='col-md-6'>
          <VipAbilitySetting handleSelectVipAbility={this.setVipAbility} />
          <HeroAbilitySetting handleSelectHeroAbility={this.setHeroAbility} selectHero={this.setHero} />
          <CoreAbilitySetting handleRemoveCoreHero={this.removeCoreHero} handleSetCoreHeros={this.setCoreHeros} />
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

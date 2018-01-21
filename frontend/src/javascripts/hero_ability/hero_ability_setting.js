import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import HeroAbilities from './hero_abilities'
import Title from './../common/title'
import CheckMessage from './../common/check_message'

export default class HeroAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: [],
      hero: {},
      heroAbilities: [],
      intimacy: ''
    }
    this.loadHeroAbilities = this.loadHeroAbilities.bind(this)
    this.selectHero = this.selectHero.bind(this)
    this.selectHeroAbility = this.selectHeroAbility.bind(this)
  }

  componentWillMount() {
    this.getHeros()
  }

  selectHero(hero) {
    this.setState({hero: hero})
    this.props.selectHero(hero)
  }

  loadHeroAbilities(heroAbilities) {
    this.setState({heroAbilities: heroAbilities})
  }

  getHeros() {
    fetch('api/heros')
      .then((res) => res.json())
      .then((res) => {
        this.setState({heros: res})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  selectHeroAbility(ability) {
    this.props.handleSelectHeroAbility({attached_hero_abilities: ability.attached_hero_abilities})
  }

  render() {
    return (
      <div className='heroAbilitySettingComponent'>
        <Title title='◆ヒーローアビリティ' />
        <CheckMessage checked={Object.keys(this.state.hero).length == 0 ? false : true} message='英雄を選択してください' />
        <ul>
          {this.state.heros.map((hero) =>
            (<li className='icon' key={hero.id}>
              <Hero handleLoadHeroAbilities={this.loadHeroAbilities} hero={hero} selectHero={this.selectHero} selectedHero={this.state.hero} />
            </li>)
          )}
        </ul>
        <div className='clear' />
        <div className='hero-ability-table'>
          <CheckMessage checked={this.state.intimacy != ''} message='英雄親密度のレベル帯を選択してください' />
          <HeroAbilities handleSelectHeroAbility={this.selectHeroAbility} heroAbilities={this.state.heroAbilities} />
        </div>
      </div>
    )
  }
}

HeroAbilitySetting.propTypes = {
  selectHero: PropTypes.func.isRequired,
  handleSelectHeroAbility: PropTypes.func.isRequired
}

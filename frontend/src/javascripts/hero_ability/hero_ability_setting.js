import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import HeroAbilities from './hero_abilities'
import Title from './../common/title'
import CheckMessage from './../common/check_message'
import Loading from './../common/loading'

export default class HeroAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      heros: [],
      hero: {},
      heroAbilities: [],
      selectedIntimacy: null
    }
    this.selectHero = this.selectHero.bind(this)
    this.selectHeroAbility = this.selectHeroAbility.bind(this)
  }

  componentWillMount() {
    this.getHeros()
  }

  selectHero(hero) {
    this.setState({hero: hero, selectedIntimacy: null})
    this.getHeroAbilities(hero.id)
    this.props.selectHero(hero)
  }

  getHeros() {
    fetch('api/heros')
      .then((res) => res.json())
      .then((res) => {
        this.setState({heros: res, isLoading: false})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  getHeroAbilities(hero_id) {
    fetch('api/heros/' + hero_id + '/hero_abilities')
      .then((res) => res.json())
      .then((res) => {
        this.setState({heroAbilities: res})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  selectHeroAbility(ability, ability_id) {
    this.setState({selectedIntimacy: ability_id})
    this.props.handleSelectHeroAbility({attached_hero_abilities: ability.attached_hero_abilities})
  }

  render() {
    return (
      <div className='heroAbilitySettingComponent'>
        <Title title='◆ヒーローアビリティ' />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <CheckMessage checked={Object.keys(this.state.hero).length == 0 ? false : true} message='英雄を選択してください' />
            <ul>
              {this.state.heros.map((hero) =>
                (<li className='icon' key={hero.id}>
                  <Hero hero={hero} selectHero={this.selectHero} selectedHero={this.state.hero} />
                </li>)
              )}
            </ul>
            <div className='clear' />
            <div className='hero-ability-table'>
              {Object.keys(this.state.hero).length == 0 ? (
                null
              ) : (
                <div>
                  <CheckMessage checked={this.state.selectedIntimacy != null} message='英雄親密度のレベル帯を選択してください' />
                  <HeroAbilities handleSelectHeroAbility={this.selectHeroAbility} heroAbilities={this.state.heroAbilities} selectedIntimacy={this.state.selectedIntimacy} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

HeroAbilitySetting.propTypes = {
  selectHero: PropTypes.func.isRequired,
  handleSelectHeroAbility: PropTypes.func.isRequired
}

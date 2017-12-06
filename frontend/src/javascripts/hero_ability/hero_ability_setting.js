import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import HeroAbilities from './hero_abilities'

export default class HeroAbilitySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heros: [],
      heroAbilities: []
    }
    this.loadHeroAbilities = this.loadHeroAbilities.bind(this)
    this.loadHero = this.loadHero.bind(this)
  }

  componentWillMount() {
    this.getHeros()
  }

  loadHero(hero) {
    this.props.handleLoadHero(hero)
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

  render() {
    return (
      <div className='heroAbilitySettingComponent'>
        <ul>
          {this.state.heros.map((hero) =>
            (<li className='icon' key={hero.id}>
              <Hero handleLoadHeroAbilities={this.loadHeroAbilities} handleLoadHero={this.loadHero} hero={hero} />
            </li>)
          )}
        </ul>
        <HeroAbilities heroAbilities={this.state.heroAbilities} />
      </div>
    )
  }
}

HeroAbilitySetting.propTypes = {
  handleLoadHero: PropTypes.func.isRequired
}

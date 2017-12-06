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
              <Hero handleLoadHero={this.loadHero} handleLoadHeroAbilities={this.loadHeroAbilities} hero={hero} />
            </li>)
          )}
        </ul>
        <div className='col-md-5'>
          aaa
        </div>
        <div className='col-md-7'>
          <HeroAbilities heroAbilities={this.state.heroAbilities} />
        </div>
      </div>
    )
  }
}

HeroAbilitySetting.propTypes = {
  handleLoadHero: PropTypes.func.isRequired
}
